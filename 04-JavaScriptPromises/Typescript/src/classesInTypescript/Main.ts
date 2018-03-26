import {Shape} from "./Shape";
import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";

const shape = new Shape(15,20);
const rectangle = new Rectangle(4, 5)
const circle = new Circle(3, 5, 5)

console.log("--- Shape ---")
console.log("Area: ", shape.area());
console.log("Draw: ", shape.draw());

console.log("--- Rectangle ---")
console.log("Area: ", rectangle.area())
console.log("Draw: ", rectangle.draw())

console.log("--- Circle ---")
console.log("Area: ", circle.area())
console.log("Draw: ", circle.draw())
