export class Rectangle implements ShapeInterface{

    constructor(private x: number, private y: number){}

    draw(): string {
        return `Rectangle at Position (${this.x}, ${this.y})`;
    }

    area(): number {
        return this.x * this.y;
    }
}