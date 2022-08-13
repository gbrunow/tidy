import { Document, UI } from "sketch";

import { getGutter, getHeads, layerIsArtboard, sortByName } from "./helpers";

// documentation: https://developer.sketchapp.com/reference/api/

export const arrangeAllArtboards = () => {
  const page = Document.getSelectedDocument().selectedPage;
  const artboards = page.layers.filter(layerIsArtboard).sort(sortByName);
  const gutter = getGutter(artboards);

  arrange(artboards, gutter);

  UI.message("Artboards arranged ✅");
};

const arrange = (artboards, gutter) => {
  artboards = artboards.sort((a, b) => {
    const slashesA = (a.name.match(/\//g) || []).length;
    const slashesB = (b.name.match(/\//g) || []).length;

    if (slashesA !== slashesB) {
      return slashesA - slashesB;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  })

  const heads = getHeads(artboards);

  let maxY = 0;

  const place = (node, x = 0, y = 0) => {
    let deltaX = 0;
    let deltaY = 0;
    let maxHeight = 0;

    for (const artboard of node.value) {
      artboard.frame.x = x + deltaX;
      artboard.frame.y = y + deltaY;
      deltaX += gutter + artboard.frame.width;
      maxHeight = Math.max(maxHeight, artboard.frame.height);
    }

    for (const child of node.children) {
      maxY = Math.max(y + deltaY, maxY);
      place(child, x + deltaX, maxY);
    }

    deltaY = Math.max(gutter + maxHeight, deltaY);
    maxY = Math.max(y + deltaY, maxY);
  }

  for (const head of heads) {
    place(head, 0, maxY + gutter);
  }

}

// const placeNodeArtboards = (artboards, gutter, x = 0, y = 0) => {
//   let side = 0;
//   let top = 0;
//   let bottom = 0;

//   for (let i = 0; i < artboards.length; i++) {
//     const artboard = artboards[i];
//     artboard.frame.x = x;
//     artboard.frame.y = y + top;
//     side = Math.max(side, artboard.frame.width + gutter);
//     bottom += artboard.frame.height + gutter;

//     if (i < artboards.length - 1) {
//       top += artboard.frame.height + gutter;
//     }
//   }

//   return { side, top, bottom };
// }