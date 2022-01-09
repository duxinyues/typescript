/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 23:34:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-09 23:51:33
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

        if (this._lastTime === -1) this._lastTime = timeStamp
    }
}

/**
 * protected 修饰符，让该类的子元素能够访问该类的成员变量。
 */