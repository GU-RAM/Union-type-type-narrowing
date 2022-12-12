import { getArea } from "./area.js";
const circle = {
    circle: "circle",
    radius: 10,
};
const rectangle = {
    rectangle: "rectangle",
    length: 7,
    breadth: 5,
};
const triangle = {
    triangle: "triangle",
    base: 12,
    height: 7,
};
console.log(getArea(circle));
console.log(getArea(rectangle));
console.log(getArea(triangle));
