/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-05 14:00:34
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-05 15:30:12
 * @FilePath: \typescript\generic.ts
 * @Description: 泛型
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
function identity<TResponse>(arg: TResponse): TResponse {
    return arg;
}

console.log(identity<number>(90)); // 89

function assign<T, U>(target: T, source: U): T {
    return target
}

interface Point {
    x: number;
    y: number;
}

function move<T extends Point>(arg: T): T {
    return arg;
}
move({ x: 90, y: 0, z: 8 })