export function Node(value, children) {
  this.value = value;
  this.children = children || new Set();
}

export const getAdjcencyList = (artboards) => {
  const adj = new Map();

  for (const artboard of artboards) {
    let node = adj.get(artboard.name) || new Node([]);
    node.value.push(artboard);
    adj.set(artboard.name, node);

    const parts = artboard.name.split("/");
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

export const getRoots = (artboards, adj) => {
  const roots = new Set();

  for (const artboard of artboards) {
    roots.add(artboard.name.split("/")[0]);
  }

  return Array.from(roots).map(r => adj.get(r));
}