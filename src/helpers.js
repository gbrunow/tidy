export function Node(value, name, children, parent) {
  this.value = value;
  this.children = children || new Set();
}

export const getAdjcencyList = (artboards) => {
  const adj = new Map();

  for (const artboard of artboards) {
    const name = getName(artboard);

    let node = adj.get() || new Node([]);
    node.value.push(artboard);
    adj.set(name, node);

    const parts = name.split("/");
    parts.pop();

    while (parts.length) {
      const part = parts.pop();
      const parentName = [...parts, part].join("/");
      const parentNode = adj.get(parentName) || new Node();
      parentNode.children.add(node);
      adj.set(parentName, parentNode);
      node = parentNode;
    }
  }

  return adj;
}

/**
 * Returns artboard name without comments
 * (e.g `A/B/C # a comment` becomes `A/B/C`)
 */
export const getName = (artboard) => artboard.name.match(/^[^#]*/)[0].trim();

export const getRoots = (artboards, adj) => {
  const roots = new Set();

  for (const artboard of artboards) {
    roots.add(getName(artboard).split("/")[0]);
  }

  return Array.from(roots).map(r => adj.get(r));
}

export const getGutter = (artboards) => {
  const MIN_GUTTER = 20;
  const MAX_GUTTER = 250;

  let totalDimensions = 0;
  for (const artboard of artboards) {
    totalDimensions += artboard.frame.height;
    totalDimensions += artboard.frame.width;
  }

  const averageDimension = (totalDimensions) / (artboards.length * 2);
  const gutter = averageDimension / 10;

  return Math.max(Math.min(Math.round(gutter / 10) * 10, MAX_GUTTER), MIN_GUTTER);
}

export const sortByName = (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1);

export const layerIsArtboard = (l) => l.background;
