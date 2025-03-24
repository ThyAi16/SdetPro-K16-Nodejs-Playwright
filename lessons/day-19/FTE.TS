import Employee from "./Employee";

export default class FTE extends Employee {
  constructor() {
    super(20 * 1000);
  }

  setBonus(): void {
    this.bonus = 1 * 100;
  }
}

let ti = new FTE();
ti.setBonus();
console.log(ti.getBonus());
