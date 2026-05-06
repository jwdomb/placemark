declare module "@maplibre/maplibre-gl-style-spec" {
  export function validate(options: any): any[];
  export function validateStyleMin(style: any, styleSpec?: any): any[];
  namespace expression {
    export function createExpression(def: import("maplibre-gl").ExpressionSpecification): {
      value: {
        evaluate(globals: any, feature: any): string;
      };
    };
  }
}
