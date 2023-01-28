class Shape {
    sides: number;

    constructor(sides: number) {
        this.sides = sides;
    }
}

let arr: Shape[] = [ new Shape(3), new Shape(4), new Shape(5) ];

console.log(arr[9].sides);