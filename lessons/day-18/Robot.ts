export default class Robot {
  static id = 0;
  constructor() {
    Robot.id++;
  }
  getId(): number {
    return Robot.id;
  }
}
// const lulu = new Robot();
// const meo = new Robot();
// console.log(lulu.getId());
// console.log(meo.getId());
// Run: npx tsx lessons\day-18\class-variables\Robot.ts
