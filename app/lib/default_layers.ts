import type { ILayerConfig } from "types";

export type LayerConfigTemplate = Pick<
  ILayerConfig,
  "name" | "url" | "type" | "token"
>;

const LAYERS: Record<string, LayerConfigTemplate> = {
  STREETS: {
    name: "Streets (OSM)",
    type: "XYZ",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    token: "",
  },
  // NOTE: NAIP imagery only covers the contiguous United States.
  // International users will see blank tiles when this layer is selected.
  SATELLITE: {
    name: "Satellite (NAIP)",
    type: "XYZ",
    url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
    token: "",
  },
  MONOCHROME: {
    name: "Monochrome",
    type: "XYZ",
    url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    token: "",
  },
  DARK: {
    name: "Dark",
    type: "XYZ",
    url: "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    token: "",
  },
};

export default LAYERS;
