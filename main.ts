import { getArea } from "./area.js";
import { Circle, Rectangle, Triangle } from "./interfaces.js";

const circle: Circle = {
  circle: "circle",
  radius: 10,
};

const rectangle: Rectangle = {
  rectangle: "rectangle",
  length: 7,
  breadth: 5,
};

const triangle: Triangle = {
  triangle: "triangle",
  base: 12,
  height: 7,
};

console.log(getArea(circle));
console.log(getArea(rectangle));
console.log(getArea(triangle));
