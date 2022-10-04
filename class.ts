/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-03 18:29:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-04 15:47:17
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