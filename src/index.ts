/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-07 15:09:33
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-07 15:17:55
 * @FilePath: \typescript\src\index.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
function getData(x: number, y: number, name?: string): number | string {
    if (name) {
        return name;
    }
    return x + y;
}

getData(2,3)