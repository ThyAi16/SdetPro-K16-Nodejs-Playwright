"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, maxSpeed) {
        this.name = name;
        this.speed = this.getRandomSpeedAnimal(maxSpeed);
    }
    Animal.prototype.getRandomSpeedAnimal = function (maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    return Animal;
}());
exports.Animal = Animal;
