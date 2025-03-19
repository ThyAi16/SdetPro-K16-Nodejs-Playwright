export default class Animal {
  // Private: Properties chỉ dùng cho lớp cha, không cha lớp con access
  // Protected: lớp con truy cập được nhưng ở ngoài không truy cập được

  protected name: string;
  protected speed: number;

  constructor(name: string, maxSpeed: number) {
    this.name = name;
    this.speed = Math.floor(Math.random() * maxSpeed);
  }

  public getName(): string {
    return this.name;
  }

  public getSpeed(): number {
    return this.speed;
  }
}
