import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";

GetSpeedWinner();

function GetSpeedWinner() {
  const horse = new Horse();
  const tiger = new Tiger();
  const dog = new Dog();
  const racingAnimal = [horse, tiger, dog];
  const winner = racingAnimal.sort((a, b) => b.getSpeed() - a.getSpeed())[0];

  console.log(`Horse: ${horse.getSpeed()}`);
  console.log(`Tiger: ${tiger.getSpeed()}`);
  console.log(`Dog: ${dog.getSpeed()}`);

  console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()}`);
}
