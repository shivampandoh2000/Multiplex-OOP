"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(movnam, type) {
        this.movName = movnam;
        this.type = type;
    }
    Movie.prototype.getName = function () {
        return this.movName;
    };
    return Movie;
}());
exports.Movie = Movie;
