function getCircleArea(radius) {
    return Math.pow(radius, 2) * Math.PI;
}
function getRectangleArea(length, breadth) {
    return length * breadth;
}
function getTriangleArea(height, base) {
    return 0.5 * height * base;
}
function isCircle(shape) {
    return "circle" in shape;
}
function isRectangle(shape) {
    return "rectangle" in shape;
}
function isTriangle(shape) {
    return "triangle" in shape;
}
export function getArea(shape) {
    if (isCircle(shape)) {
        console.log("gurami");
        return getCircleArea(shape.radius);
    }
    else if (isRectangle(shape)) {
        return getRectangleArea(shape.length, shape.breadth);
    }
    else if (isTriangle(shape)) {
        return getTriangleArea(shape.height, shape.base);
    }
}
