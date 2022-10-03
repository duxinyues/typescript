/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-01 22:32:54
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-01 23:23:50
 * @FilePath: \typescript\unknown.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

function f(msg:unknown){
    if(typeof msg==='string'){
        return msg.length
    }
}
f('08786');

function f1():never{
    throw new Error("");
}

const arr:number[] = [1,2,4];
const arr1 = arr[5];
console.log(typeof arr1)