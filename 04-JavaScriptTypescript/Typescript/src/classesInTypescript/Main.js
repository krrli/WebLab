"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var shape = new Shape_1.Shape(15, 20);
var rectangle = new Rectangle_1.Rectangle(4, 5);
var circle = new Circle_1.Circle(3, 5, 5);
console.log("--- Shape ---");
console.log("Area: ", shape.area());
console.log("Draw: ", shape.draw());
console.log("--- Rectangle ---");
console.log("Area: ", rectangle.area());
console.log("Draw: ", rectangle.draw());
console.log("--- Circle ---");
console.log("Area: ", circle.area());
console.log("Draw: ", circle.draw());
//# sourceMappingURL=Main.js.map