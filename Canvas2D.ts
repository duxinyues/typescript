/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 22:24:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-09 22:24:07
 * @Description: 文件描述
 */
export class Canvas2DUtils {
    public context: CanvasRenderingContext2D |null;
    public constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d");
    }

    public drawText(txt: string): void {
        this.context.save();
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        let contextX: number = this.context.canvas.width / 2;
        let contextY: number = this.context.canvas.height / 2;
        // 默认的颜色填充
        this.context.fillStyle = 'red';
        // 文字填充
        this.context.fillText(txt, contextX, contextY);
        // 描边
        this.context.strokeStyle = 'green';
        // 文字描边
        this.context.strokeText(txt, contextX, contextY);

        // 恢复初始化状态
        this.context.restore();
    }
}
