/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 17:17:14
 * @LastEditors: 
 * @LastEditTime: 2022-01-12 21:57:04
 * @Description: 文件描述
 */
import {Canvas2DUtils}  from './Canvas2D';

let canvas: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;

if (canvas === null) {
    throw new Error('无法获取HTMLCanvasElement');
}

let canvas2d: Canvas2DUtils = new Canvas2DUtils(canvas);

canvas2d.drawText('hello world');