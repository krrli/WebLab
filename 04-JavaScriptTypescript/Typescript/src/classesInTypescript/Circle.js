"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    Circle.prototype.draw = function () {
        return "Circle at Position (" + this.x + ", " + this.y + ") with radius " + this.r;
    };
    Circle.prototype.area = function () {
        return Math.pow(this.r, 2) * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map