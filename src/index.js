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
var Duxin = /** @class */ (function () {
    function Duxin(name, age) {
        this.name = name;
        this.age = age;
    }
    Duxin.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Duxin;
}());
var Duxin1 = /** @class */ (function (_super) {
    __extends(Duxin1, _super);
    function Duxin1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duxin1.prototype.get = function (money) {
        return this.name + ":" + money;
    };
    return Duxin1;
}(Duxin));
console.log(null === undefined);
