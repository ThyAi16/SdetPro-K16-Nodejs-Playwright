import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();

// Option 1:
// let house: House = builder
//   .setTopRoofColor("Red")
//   .setWindowNumber(2)
//   .setColor("Yellow")
//   .setmainDoorNumber(9)
//   .build();

// Option 2:
builder.setTopRoofColor("Red");
builder.setWindowNumber(2);
builder.setColor("Yellow");
builder.setmainDoorNumber(9);
let house: House = builder.build();
