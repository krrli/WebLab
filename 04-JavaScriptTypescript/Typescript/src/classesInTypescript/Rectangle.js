"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y) {
        this.x = x;
        this.y = y;
    }
    Rectangle.prototype.draw = function () {
        return "Rectangle at Position (" + this.x + ", " + this.y + ")";
    };
    Rectangle.prototype.area = function () {
        return this.x * this.y;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map