# Hive Planner PWA

A lightweight browser-based planner for building hive layouts on a large coordinate grid.

**Live App:** https://platinumpup.github.io/S2/

## How It Works

Use the toolbar to move around the map, draw zones, place icons, add text labels, and manage objects.

## Tools

* **Pan:** Move around the planner.
* **Draw:** Place rectangle zones. Click once to start, move your cursor to preview the shape, then click again to place it.
* **Icons:** Place map markers.
* **Text:** Add labels anywhere on the grid.
* **Undo:** Reverse the last action.
* **More:** Access reset, JSON save/load, delete mode, and clear options.

## Navigation

* Use the mouse wheel to zoom in and out.
* Drag the map to pan.
* The bottom bar shows live cursor coordinates and zoom percentage.
* To jump to a specific spot, enter the x and y coordinates, then click **Jump**.

## Objects

* Click an object to select it.
* Selected objects can be locked, moved backward, brought forward, or deleted.
* Locked objects stay in place until unlocked.

## Exporting

* Click **PNG** to export the current visible planner view as an image.
* Use **JSON** to copy, save, or reload planner data.

## Install

Hive Planner can be installed as a PWA from supported browsers.

* On desktop, use the browser install option.
* On mobile, use **Add to Home Screen**.

## Aligned hive-map background

The reference hive map is stored at `map-background-aligned.jpg`. Its inner 13 × 13 grid has been cropped and resized to the planner's 106 × 68 world-cell geometry. The map is drawn centered around planner cell `(500, 500)`, with the interactive coordinate grid rendered on top. The same integration is applied to `index.html` and the two included standalone HTML variants.

