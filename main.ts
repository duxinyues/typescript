import {Canvas2DUtils}  from './Canvas2D';

let canvas: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;

if (canvas === null) {
    throw new Error('无法获取HTMLCanvasElement');
}

let canvas2d: Canvas2DUtils = new Canvas2DUtils(canvas);

canvas2d.drawText('hello world');