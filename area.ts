import { Circle, Rectangle, Triangle, Shape } from "./interfaces.js";

function getCircleArea(radius: number): number {
  return Math.pow(radius, 2) * Math.PI;
}

function getRectangleArea(length: number, breadth: number): number {
  return length * breadth;
}

function getTriangleArea(height: number, base: number): number {
  return 0.5 * height * base;
}

function isCircle(shape: Shape): shape is Circle {
  return "circle" in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "rectangle" in shape;
}

function isTriangle(shape: Shape): shape is Triangle {
  return "triangle" in shape;
}

export function getArea(shape: Shape) {
  if (isCircle(shape)) {
    console.log("gurami");
    return getCircleArea(shape.radius);
  } else if (isRectangle(shape)) {
    return getRectangleArea(shape.length, shape.breadth);
  } else if (isTriangle(shape)) {
    return getTriangleArea(shape.height, shape.base);
  }
}
