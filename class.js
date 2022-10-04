var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-03 18:29:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-04 16:02:13
 * @FilePath: \typescript\class.ts
 * @Description:
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
var Name = /** @class */ (function () {
    function Name() {
        this.foodDta = 100;
        this.name = 90;
    }
    Name.prototype.test = function () {
        return this.name;
    };
    return Name;
}());
var Circle = /** @class */ (function () {
    function Circle() {
        this.x = 90;
    }
    Circle.prototype.test = function () {
        this.x;
    };
    return Circle;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.out = function () {
        this.x;
    };
    return Derived;
}(Circle));
var Shape = /** @class */ (function () {
    function Shape() {
        this.color = 'red';
    }
    Shape.prototype.changeColor = function () {
        return this.color = this.color === 'red' ? 'white' : 'black';
    };
    return Shape;
}());
var DerivedShape = /** @class */ (function (_super) {
    __extends(DerivedShape, _super);
    function DerivedShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedShape;
}(Shape));
var derivedShape = new DerivedShape();
console.log(derivedShape.changeColor());
