/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-03 16:32:33
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-07 15:31:02
 * @FilePath: \typescript\interface.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
// 接口
interface Props {
    new(message?: string): Error;
}

interface Document {
    getElementById(element: string): HTMLElement | null
}

interface A {
    f(x: boolean): string;
}
interface B {
    f: { (x: boolean): string }
}

interface C {
    f: (x: boolean) => string
}

interface Index {
    [prop: string]: number;
    name: 0
}

interface NumberIndex {
    [prop: number]: string;
}

interface Shape {
    name: string;
}

interface Circle extends Shape, A {
    age: number;
}
