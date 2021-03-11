"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplex = void 0;
var multiplex = /** @class */ (function () {
    function multiplex() {
        this.scr = [];
        this.mo = [];
        this.aggr = [];
    }
    multiplex.prototype.addScr = function (scr) {
        this.scr.push(scr);
    };
    multiplex.prototype.addMov = function (mov) {
        this.mo.push(mov);
    };
    multiplex.prototype.addAgg = function (scr, mov) {
        if (scr.name === "Santham") {
            if (mov.type.name === "3D") {
                this.aggr.push(400 + 30);
            }
            else {
                this.aggr.push(400 + 0);
            }
        }
        else {
            if (mov.type.name === "3D") {
                this.aggr.push(120 + 30);
            }
            else {
                this.aggr.push(120 + 0);
            }
        }
    };
    return multiplex;
}());
exports.multiplex = multiplex;
