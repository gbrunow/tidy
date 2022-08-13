import { Document, UI } from "sketch";

import { arrangeAllArtboards } from "./arrange";

// documentation: https://developer.sketchapp.com/reference/api/

export const tidyUpCurrent = () => runner(
  [Document.getSelectedDocument().selectedPage],
  'Organized page',
  tidyUp,
);

export const tidyUpAll = () => runner(
  Document.getSelectedDocument().pages,
  'Organized all pages',
  tidyUp,
);
export const arrangeCurrent = () => runner(
  [Document.getSelectedDocument().selectedPage],
  'Arranged page',
  arrange,
);

export const arrangeAll = () => runner(
  Document.getSelectedDocument().pages,
  'Arranged all pages',
  arrange,
);
export const sortCurrent = () => runner(
  [Document.getSelectedDocument().selectedPage],
  'Sorted page',
  sort,
);

export const sortAll = () => runner(
  Document.getSelectedDocument().pages,
  'Sorted all pages',
  sort,
);

const runner = (pages, message, handler) => {
  for (const page of pages) {
    handler(page);
  }
  UI.message(`${message} ✅`);
}

const tidyUp = (page) => {
  sort(page);
  arrange(page);
}

const arrange = (page) => {
  arrangeAllArtboards(page);
}

const sort = (page) => {
  const order = page.layers.map(l => l.name).sort((a, b) => a === b ? 0 : (a > b ? -1 : 1));
  const orderMap = {};

  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }

  for (const layer of page.layers) {
    layer.index = orderMap[layer.name];
  }
}

