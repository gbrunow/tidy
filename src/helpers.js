export function Node(value, children, parent, name) {
  this.value = value;
  this.children = children || new Set();
  this.parent = parent;
  this.name = name;

  this.trim = () => {
    const empty = Array.from(this.children).filter((c) => !c.value);

    this.children.forEach((c) => c.trim());
    empty.forEach((e) => {
      e.children.forEach(c => this.children.add(c));
      this.children.delete(e);
    });
  }
}

export const getHeads = (artboards) => {
  const nodeMap = getNodeMap(artboards);
  const heads = getHeadsFromNodeMap(nodeMap);

  for (const head of heads) {
    head.parent = null;
    head.trim();
  }

  return heads;
}

const getNodeMap = (artboards) => {
  const map = new Map();

  for (const artboard of artboards) {
    const name = getName(artboard);

    let node = map.get(name) || new Node([]);
    node.value.push(artboard);
    node.name = artboard.name;
    map.set(name, node);

    const parts = name.split("/");
    parts.pop();

    while (parts.length) {
      const part = parts.pop();
      const parentName = [...parts, part].join("/");
      const parentNode = map.get(parentName) || new Node();

      parentNode.children.add(node);
      parentNode.name = parentName;

      map.set(parentName, parentNode);

      node.parent = parentNode;
      node = parentNode;
    }
  }

  return map;
}

const getHeadsFromNodeMap = (nodeMap) => {
  const shallowHeads = Array.from(nodeMap.values()).filter((node) => !node.parent);
  const heads = [];

  const getFirstNodeWithArtboard = (node) => {
    if (node.value) {
      return [node];
    } else {
      const res = [];

      for (const child of Array.from(node.children)) {
        res.push(...getFirstNodeWithArtboard(child));
      }

      return res;
    }
  };

  for (const head of shallowHeads) {
    heads.push(...getFirstNodeWithArtboard(head));
  }

  return heads;
}

export const getName = (artboard) => artboard.name.match(/^[^#]*/)[0].trim();

export const getGutter = (artboards) => {
  const MIN_GUTTER = 20;
  const MAX_GUTTER = 250;
  const RATIO = 10;
  const ROUNDING_STEP = 25;

  let totalDimensions = 0;
  for (const artboard of artboards) {
    totalDimensions += artboard.frame.height;
    totalDimensions += artboard.frame.width;
  }

  const averageDimension = (totalDimensions) / (artboards.length * 2);
  const gutter = averageDimension / RATIO;

  return Math.max(Math.min(Math.round(gutter / ROUNDING_STEP) * ROUNDING_STEP, MAX_GUTTER), MIN_GUTTER);
}

export const sortByName = (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1);

export const layerIsArtboard = (l) => l.background;
