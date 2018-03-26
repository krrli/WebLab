export class Circle implements ShapeInterface{

    constructor(private x: number, private y: number, private r: number) {

    }

    draw() {
        return `Circle at Position (${this.x}, ${this.y}) with radius ${this.r}`
    }

    area() {

        return Math.pow(this.r, 2) * Math.PI
    }
}