/// <reference types="react/next" />

import type * as _maplibregl from "maplibre-gl";

declare global {
  namespace maplibregl {
    export type Map = _maplibregl.Map;
    export type MapOptions = _maplibregl.MapOptions;
    export type MapMouseEvent = _maplibregl.MapMouseEvent;
    export type MapTouchEvent = _maplibregl.MapTouchEvent;
    export type MapLibreEvent = _maplibregl.MapLibreEvent;
    export type MapGeoJSONFeature = _maplibregl.MapGeoJSONFeature;
    export type GeoJSONSource = _maplibregl.GeoJSONSource;
    export type GeolocateControl = _maplibregl.GeolocateControl;
    export type NavigationControl = _maplibregl.NavigationControl;
    export type AttributionControl = _maplibregl.AttributionControl;
    export type Marker = _maplibregl.Marker;
    export type LngLatBounds = _maplibregl.LngLatBounds;
    export type LngLatBoundsLike = _maplibregl.LngLatBoundsLike;
    export type LngLat = _maplibregl.LngLat;
    export type LngLatLike = _maplibregl.LngLatLike;
    export type Point = _maplibregl.Point;
    export type PointLike = _maplibregl.PointLike;
    export type StyleSpecification = _maplibregl.StyleSpecification;
    export type LayerSpecification = _maplibregl.LayerSpecification;
    export type EventData = Record<string, unknown>;
  }
}

type Opaque<Type, Token = unknown> = Type & { readonly __opaque__: Token };

type BBox4 = [number, number, number, number];

type Pos2 = [number, number];
type RGBA = [number, number, number, number];

type VertexId = {
  type: "vertex";
  featureId: number;
  vertex: number;
};

type FeatureId = {
  type: "feature";
  featureId: number;
};

type MidpointId = {
  type: "midpoint";
  featureId: number;
  vertex: number;
};

type Id = FeatureId | VertexId | MidpointId;

// Mapbox-land ID system
type RawId = Opaque<number, "RawId">;

// React-land ID system
type StringId = string;

type LayerScopedEvent = maplibregl.MapMouseEvent & {
  features?: maplibregl.MapGeoJSONFeature[];
} & maplibregl.EventData;

type BothHandler = (
  arg0: maplibregl.MapMouseEvent | maplibregl.MapTouchEvent,
) => Promisable<void>;

type TouchHandler = (arg0: maplibregl.MapTouchEvent) => Promisable<void>;

type Handlers = {
  click: BothHandler;
  move: BothHandler;
  down: BothHandler;
  touchstart?: TouchHandler;
  touchmove?: TouchHandler;
  touchend?: TouchHandler;
  up: BothHandler;
  double: BothHandler;
  enter: () => Promisable<void>;
};
