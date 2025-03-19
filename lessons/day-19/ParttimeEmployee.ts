import Employee from "./Employee";

export default class ParttimeEmployee extends Employee {
  constructor() {
    super(5 * 1000);
  }

  protected setBonus(): void {
    this.bonus = 0;
  }
}
