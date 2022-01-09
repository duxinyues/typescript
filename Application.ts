/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 23:34:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-10 00:13:25
 * @Description: 文件描述
 */
export class Application {
    protected _start: boolean = false;
    protected _requestId: number = -1;
    protected _lastTime !: number;
    protected _startTime !: number;
    // 
    protected step(timeStamp: number): void {
        if (this._startTime === -1) this._startTime = timeStamp;

        if (this._lastTime === -1) this._lastTime = timeStamp;

        let elapsedMsec: number = timeStamp - this._startTime;

        let intervalSeconds: number = (timeStamp - this._lastTime) / 1000.0;

        this._lastTime = timeStamp;

        this.update(elapsedMsec, intervalSeconds);
        this.render();

        requestAnimationFrame((elapsedMsec: number): void => {
            this.step(elapsedMsec)
        })
    };

    public update(elapsedMsec: number, intervalSeconds: number): void { };

    public render(): void { };

    public start(): void {
        if (!this._start) {
            this._start = true;
            this._requestId = -1;
            this._lastTime = -1;
            this._startTime = -1;
            // this._requestId = requestAnimationFrame((elapsedMsec: number) => {
            //     this.step(elapsedMsec)
            // });

            this._requestId = requestAnimationFrame(this.step);
        }
    };

    public stop(): void {
        if (this._start) {
            cancelAnimationFrame(this._requestId);
            this._requestId = -1;
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false;
        }
    };

    public isRuning(): boolean {
        return this._start;
    }
}

/**
 * protected 修饰符，让该类的子元素能够访问该类的成员变量。
 */
