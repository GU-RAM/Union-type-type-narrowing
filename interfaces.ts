export interface Circle {
  circle: string;
  radius: number;
}

export interface Rectangle {
  rectangle: string;
  length: number;
  breadth: number;
}

export interface Triangle {
  triangle: string;
  base: number;
  height: number;
}

export type Shape = Circle | Rectangle | Triangle;
