/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-02 20:55:28
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-03 16:41:28
 * @FilePath: \typescript\function.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
function add(num1: number, num2: number = 90) {
    return num1 + num2;
}
// 接口
interface Foo {
    name:string;
    age?:number
}

const sum:Foo = {
    name:"908",
};
