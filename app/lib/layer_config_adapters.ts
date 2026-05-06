import { getTileJSON } from "app/lib/utils";
import once from "lodash/once";
import type { LayerSpecification, StyleSpecification } from "maplibre-gl";
import { toast } from "react-hot-toast";
import type { ILayerConfig } from "types";

const warnOffline = once(() => {
  toast.error("Offline: falling back to blank background");
});

function paintLayoutFromRasterLayer(
  layer: ILayerConfig,
): Pick<LayerSpecification & { type: "raster" }, "type" | "paint" | "layout"> {
  return {
    type: "raster",
    paint: {
      "raster-opacity": layer.opacity,
    },
    layout: {
      visibility: layer.visibility ? "visible" : "none",
    },
  };
}

export async function addTileJSONStyle(
  style: StyleSpecification,
  layer: ILayerConfig,
  id: number,
) {
  const sourceId = `placemarkInternalSource${id}`;
  const layerId = `placemarkInternalLayer${id}`;

  try {
    const resp = await getTileJSON(layer.url);

    style.sources[sourceId] = {
      type: "raster",
      tiles: resp.tiles,
      scheme: resp.scheme || "xyz",
      tileSize: 256,
      minzoom: resp.minzoom,
      maxzoom: resp.maxzoom,
    };

    const newLayer = {
      id: layerId,
      source: sourceId,
      ...paintLayoutFromRasterLayer(layer),
    } as LayerSpecification;

    style.layers.push(newLayer);
  } catch (_e) {
    toast.error(
      "A TileJSON layer failed to load: the server it depends on may be down",
    );
  }
  return style;
}

export function addXYZStyle(
  style: StyleSpecification,
  layer: ILayerConfig,
  id: number,
) {
  const sourceId = `placemarkInternalSource${id}`;
  const layerId = `placemarkInternalLayer${id}`;

  style.sources[sourceId] = {
    type: "raster",
    tiles: [layer.url],
    scheme: layer.tms ? "tms" : "xyz",
    tileSize: 256,
  };

  const newLayer = {
    id: layerId,
    source: sourceId,
    ...paintLayoutFromRasterLayer(layer),
  } as LayerSpecification;

  style.layers.push(newLayer);

  return style;
}
