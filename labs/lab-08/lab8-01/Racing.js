"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Horse_1 = require("./Horse");
var Tiger_1 = require("./Tiger");
var Dog_1 = require("./Dog");
GetSpeedWinner();
function GetSpeedWinner() {
    var horse = new Horse_1.default();
    var tiger = new Tiger_1.default();
    var dog = new Dog_1.default();
    var racingAnimal = [horse, tiger, dog];
    var winner = racingAnimal.sort(function (a, b) { return b.getSpeed() - a.getSpeed(); })[0];
    console.log("Horse: ".concat(horse.getSpeed()));
    console.log("Tiger: ".concat(tiger.getSpeed()));
    console.log("Dog: ".concat(dog.getSpeed()));
    console.log("Winner is ".concat(winner.getName(), ", with speed: ").concat(winner.getSpeed(), " km/h"));
}
