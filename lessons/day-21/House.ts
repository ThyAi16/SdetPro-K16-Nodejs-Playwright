// Require: Immutable Object
export default class House {
  private topRoofColor: string;
  private windowNumber: number;
  private color: string;
  private mainDoorNumber: number;

  constructor(
    topRoofColor: string,
    windowNumber: number,
    color: string,
    mainDoorNumber: number
  ) {
    this.topRoofColor = topRoofColor;
    this.windowNumber = windowNumber;
    this.color = color;
    this.mainDoorNumber = mainDoorNumber;
  }

  // Getter
  getTopRoofColor(): string {
    return this.topRoofColor;
  }

  getWindowNumber(): number {
    return this.windowNumber;
  }

  getColor(): string {
    return this.color;
  }

  getMainDoorNumber(): number {
    return this.mainDoorNumber;
  }
}

let thyHouse = new House("Red", 7, "White", 8);
let aiHouse = new House("Yellow", 9, "White", 4);
