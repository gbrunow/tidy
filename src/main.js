import { Document, UI } from "sketch";

import { getAdjcencyList, getRoots } from "./helpers";

// documentation: https://developer.sketchapp.com/reference/api/

const HORIZONTAL_GUTTER = 100;
const VERTICAL_GUTTER = 100;

const alreadyProcessed = [];
let artboardList = [];

export const ArrangeArtboardsInColumns = () => {
  artboardList = getFullArtboardList();
  arrange(artboardList);

  // DrawArtboards(artboardList);
  // zoomToView();
  UI.message("Artboards arranged ✅");
};

export const ArrangeArtboardsInRows = () => {
  artboardList = getFullArtboardList();
  DrawArtboardsRows(artboardList);
  zoomToView();
  UI.message("Artboards arranged ✅");
};

const arrange = (artboards) => {
  artboards = artboards.sort((a, b) => {
    const slashesA = (a.name.match(/\//g) || []).length;
    const slashesB = (b.name.match(/\//g) || []).length;

    if (slashesA !== slashesB) {
      return slashesA - slashesB;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  })

  const adj = getAdjcencyList(artboards);
  const roots = getRoots(artboards, adj);

  const location = { x: 0, y: 0 };
  for (const root of roots) {
    placeNode(root, '');
  }
}

const placeNode = (node, s) => {
  let increment = "";
  if (node.value) {
    for (const artboard of node.value) {
      console.log(`${s} ${artboard.name}`)
    }
    increment = " . ";
  }

  for (const child of node.children) {
    placeNode(child, s + increment);
  }
}

const getArtboards = () => {
  const artboards = Document.getSelectedDocument()
    .selectedPage.layers.filter(layerIsArtboard)
    .sort(sortByName);

}


const sortByName = (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1);

const layerIsArtboard = (l) => l.background;

const getFullArtboardList = () =>
  Document.getSelectedDocument()
    .selectedPage.layers.filter(layerIsArtboard)
    .sort(sortByName);

function DrawArtboards(artboards, x = 0, y = 0) {
  var incrementY = 0;

  for (var i = 0; i < artboards.length; i++) {
    if (alreadyProcessed.indexOf(artboards[i]) < 0) {
      console.log(artboards[i].name, x, y);

      var descendants = [];
      var brothers = [];

      artboards[i].frame.x = x;
      artboards[i].frame.y = y + incrementY;

      var nodes = artboards[i].name.split("/").map((name) => name.trim());
      var prefix = "";
      var fullPrefix = "";
      for (var j = 0; j < nodes.length; j++) {
        if (j < nodes.length - 1) prefix += nodes[j] + "/";

        fullPrefix += nodes[j] + "/";
      }

      descendants = getDescendants(fullPrefix);
      brothers = getBrothers(prefix);

      alreadyProcessed.push(artboards[i]);

      var yDescendants = DrawArtboards(
        descendants,
        x + artboards[i].frame.width + HORIZONTAL_GUTTER,
        y + incrementY
      );

      if (yDescendants > artboards[i].frame.height) incrementY += yDescendants;
      else incrementY += artboards[i].frame.height;

      if (i < artboards.length - 1) incrementY += VERTICAL_GUTTER;

      var yBrothers = DrawArtboards(brothers, x, y + incrementY);
      incrementY += yBrothers;
      if (i < artboards.length - 1 && brothers.length > 0)
        incrementY += VERTICAL_GUTTER;
    }
  }

  return incrementY;
}

function DrawArtboardsRows(artboards, x = 0, y = 0) {
  var incrementX = 0;

  for (var i = 0; i < artboards.length; i++) {
    if (alreadyProcessed.indexOf(artboards[i]) < 0) {
      var xAcc = 0;
      var descendants = [];
      var brothers = [];
      var hadChildren = false;
      var hadBrothers = false;

      artboards[i].frame.x = x + incrementX;
      artboards[i].frame.y = y;

      var nodes = artboards[i].name.split("/").map((name) => name.trim());
      var prefix = "";
      var fullPrefix = "";
      for (var j = 0; j < nodes.length; j++) {
        if (j < nodes.length - 1) prefix += nodes[j] + "/";

        fullPrefix += nodes[j] + "/";
      }

      descendants = getDescendants(fullPrefix);
      brothers = getBrothers(prefix);

      alreadyProcessed.push(artboards[i]);

      var xDescendants = DrawArtboardsRows(
        descendants,
        x + incrementX,
        y + artboards[i].frame.height + VERTICAL_GUTTER
      );

      if (xDescendants > artboards[i].frame.width) incrementX += xDescendants;
      else incrementX += artboards[i].frame.width;

      if (i < artboards.length - 1) incrementX += HORIZONTAL_GUTTER;

      var xBrothers = DrawArtboardsRows(brothers, x + incrementX, y);
      incrementX += xBrothers;
      if (i < artboards.length - 1 && brothers.length > 0)
        incrementX += HORIZONTAL_GUTTER;
    }
  }

  return incrementX;
}

function getDescendants(nodeName) {
  var descendants = [];
  artboardList.forEach(function (artboard) {
    var compareName = "";
    var nodes = artboard.name.split("/").map((name) => name.trim());
    for (var i = 0; i < nodes.length; i++) {
      compareName += nodes[i] + "/";
    }

    var startsbythis = compareName.startsWith(nodeName);
    if (startsbythis) {
      descendants.push(artboard);
    }
  });

  descendants.sort(sortByName);

  return descendants;
}

function getBrothers(nodeName) {
  var brothers = [];
  var slashCount = nodeName.split("/").length;
  artboardList.forEach(function (artboard) {
    var startsbythis = artboard.name.startsWith(nodeName);
    if (startsbythis && artboard.name.split("/").length == slashCount) {
      brothers.push(artboard);
    }
  });

  brothers.sort(sortByName);
  return brothers;
}

function zoomToView(context) {
  // var view;
  // if (MSApplicationMetadata.metadata().appVersion < 48) {
  //   view = context.document.currentView();
  // } else {
  //   view = context.document.contentDrawView();
  // }
  // view.centerLayersInCanvas();
}
