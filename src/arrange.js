import { UI } from "sketch";

import { getAdjcencyList, getGutter, getRoots, layerIsArtboard, sortByName } from "./helpers";

export const arrangeAllArtboards = (page) => {
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

    const adj = getAdjcencyList(artboards);
    const roots = getRoots(artboards, adj);
    let maxY = 0;

    const placeNode = (node, x = 0, y = 0) => {
        let deltaX = 0;
        let deltaY = 0;
        let maxHeight = 0;

        if (node.value) {
            for (const artboard of node.value) {
                artboard.frame.x = x + deltaX;
                artboard.frame.y = y + deltaY;
                deltaX += gutter + artboard.frame.width;
                maxHeight = Math.max(maxHeight, artboard.frame.height);
            }
        } else {
            // deltaX += gutter;
        }

        for (const child of node.children) {
            maxY = Math.max(y + deltaY, maxY);
            placeNode(child, x + deltaX, maxY);
        }

        deltaY = Math.max(gutter + maxHeight, deltaY);
        maxY = Math.max(y + deltaY, maxY);
    }

    for (const root of roots) {
        placeNode(root, 0, maxY + gutter * 5);
    }
}