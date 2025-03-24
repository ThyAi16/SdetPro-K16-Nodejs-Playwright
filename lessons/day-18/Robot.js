"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Robot = /** @class */ (function () {
    function Robot() {
        Robot.id++;
    }
    Robot.prototype.getId = function () {
        return Robot.id;
    };
    Robot.id = 0;
    return Robot;
}());
exports.default = Robot;
// const lulu = new Robot();
// const meo = new Robot();
// console.log(lulu.getId());
// console.log(meo.getId());
// Run: npx tsx lessons\day-18\class-variables\Robot.ts
