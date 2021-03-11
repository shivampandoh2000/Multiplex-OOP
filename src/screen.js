"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrn = void 0;
var Scrn = /** @class */ (function () {
    function Scrn(name, mov) {
        this.name = name;
        this.movie = mov;
    }
    Scrn.prototype.getname = function () {
        return this.name;
    };
    return Scrn;
}());
exports.Scrn = Scrn;
