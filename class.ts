/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-03 18:29:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-04 17:37:35
 * @FilePath: \typescript\class.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
class Name {
    private foodDta: number = 100;
    name: number;
    constructor() {
        this.name = 90;
    }
    test(): number {
        return this.name;
    }

}
class Circle {
    x: number = 90;
    test() {
        this.x;
    }
}

class Derived extends Circle {
    out() {
        this.x;
    }
}


class Shape {
    color: string;
    constructor() {
        this.color = 'red';
    }
    changeColor() {
        return this.color = this.color === 'red' ? 'white' : 'black';
    }
}

class DerivedShape extends Shape {
    radius: number;
    constructor() {
        super();
        this.radius = 90
    }
}

const derivedShape = new DerivedShape();
console.log(derivedShape.changeColor())

interface A {
    name: string;
}
interface B {
    sum: number;
}

class C implements A, B {
    name = '32';
    sum;
    constructor() {
        this.sum = 908;
    }
}


class D{
    static version:string = '1.0';
}
const d = new D();
console.log(D.version);//1.0
console.log(d.version)