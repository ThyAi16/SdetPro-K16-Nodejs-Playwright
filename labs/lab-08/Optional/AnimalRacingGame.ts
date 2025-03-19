import Tiger from "./Tiger";
import Horse from "./Horse";
import Dog from "./Dog";
import AnimalRacingController from "./AnimalRacingController";

let tiger = new Tiger();
let horse = new Horse();
let dog = new Dog();
const winner = AnimalRacingController.getWinner([tiger, horse, dog]);
console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()}`);
