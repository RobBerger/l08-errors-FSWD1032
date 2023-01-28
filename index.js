"use strict";
class Shape {
    constructor(sides) {
        this.sides = sides;
    }
}
let arr = [new Shape(3), new Shape(4), new Shape(5)];
console.log(arr[9].sides);
