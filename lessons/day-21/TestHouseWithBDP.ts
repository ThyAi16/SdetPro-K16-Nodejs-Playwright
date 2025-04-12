import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();
let house: House = builder
  .setTopRoofColor("Red")
  .setWindowNumber(2)
  .setColor("Yellow")
  .setmainDoorNumber(9)
  .build();
