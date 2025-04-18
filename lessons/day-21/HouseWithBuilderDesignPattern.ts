// Outer class
export default class HouseWithBuilderDesignPattern {
  private topRoofColor: string;
  private windowNumber: number;
  private color: string;
  private mainDoorNumber: number;

  private constructor() {}

  // Getters: Read only
  getTopRoofColor(): string {
    return this.topRoofColor;
  }

  getWindowNumber(): number {
    return this.windowNumber;
  }

  getColor(): string {
    return this.color;
  }

  getMainWindowNumber(): number {
    return this.mainDoorNumber;
  }

  // Sale Department - Inner class - Write only
  public static Builder = class {
    private house: HouseWithBuilderDesignPattern;

    public setTopRoofColor(topRoofColor: string): this {
      this.house.topRoofColor = topRoofColor;
      // Method chaining: Tra ve cho chinh no -> House
      return this;
    }

    public setWindowNumber(windowNumber: number): this {
      this.house.windowNumber = windowNumber;
      return this;
    }

    public setColor(color: string): this {
      this.house.color = color;
      return this;
    }

    public setmainDoorNumber(mainDoorNumber: number): this {
      this.house.mainDoorNumber = mainDoorNumber;
      return this;
    }

    // Sign the contract method
    public build(): HouseWithBuilderDesignPattern {
      return this.house;
    }
  };
}
