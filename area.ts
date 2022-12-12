import { ShapeTypes, Shape } from "./interfaces.js";

function getCircleArea(radius: number): number {
  return Math.pow(radius, 2) * Math.PI;
}

function getRectangleArea(length: number, breadth: number): number {
  return length * breadth;
}

function getTriangleArea(height: number, base: number): number {
  return 0.5 * height * base;
}

export function getArea(shape: Shape) {
  switch (shape.type) {
    case ShapeTypes.Circle: {
      return getCircleArea(shape.radius);
    }
    case ShapeTypes.Rectangle: {
      return getRectangleArea(shape.length, shape.breadth);
    }
    case ShapeTypes.Triangle: {
      return getTriangleArea(shape.height, shape.base);
    }
  }
}
