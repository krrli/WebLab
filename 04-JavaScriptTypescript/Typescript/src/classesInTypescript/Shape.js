"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.draw = function () {
        return "Shape at Position (" + this.x + ", " + this.y + ")";
    };
    Shape.prototype.area = function () {
        return this.x * this.y;
    };
    return Shape;
}());
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map