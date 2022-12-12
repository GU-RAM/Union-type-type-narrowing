import { getArea } from "./area.js";
import { Circle, Rectangle, ShapeTypes, Triangle } from "./interfaces.js";

const circle: Circle = {
  type: ShapeTypes.Circle,
  radius: 10,
};

const rectangle: Rectangle = {
  type: ShapeTypes.Rectangle,
  length: 7,
  breadth: 5,
};

const triangle: Triangle = {
  type: ShapeTypes.Triangle,
  base: 12,
  height: 7,
};

console.log(getArea(circle));
console.log(getArea(rectangle));
console.log(getArea(triangle));
