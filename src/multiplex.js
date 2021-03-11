"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplex = void 0;
var multiplex = /** @class */ (function () {
    function multiplex() {
        this.scr = [];
        this.mo = [];
    }
    multiplex.prototype.addScr = function (scr) {
        this.scr.push(scr);
    };
    multiplex.prototype.addMov = function (mov) {
        this.mo.push(mov);
    };
    return multiplex;
}());
exports.multiplex = multiplex;
