export enum ShapeTypes {
  Circle,
  Rectangle,
  Triangle,
}

export interface Circle {
  type: ShapeTypes.Circle;
  radius: number;
}

export interface Rectangle {
  type: ShapeTypes.Rectangle;
  length: number;
  breadth: number;
}

export interface Triangle {
  type: ShapeTypes.Triangle;
  base: number;
  height: number;
}

export type Shape = Circle | Rectangle | Triangle;
