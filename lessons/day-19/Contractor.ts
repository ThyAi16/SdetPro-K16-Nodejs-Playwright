import Employee from "./Employee";

export default class Contractor extends Employee {
  constructor() {
    super(10 * 1000);
  }

  setBonus(): void {
    // Todo: provide detail implementation
    this.bonus = 0;
  }
}
