"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = void 0;
var screen_1 = require("./screen");
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal(name, mov, price) {
        var _this = _super.call(this, name, mov) || this;
        _this.price = price;
        return _this;
    }
    Normal.prototype.getprice = function () {
        return this.price;
    };
    return Normal;
}(screen_1.Scrn));
exports.Normal = Normal;
