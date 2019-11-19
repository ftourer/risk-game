export class Player {
  id: string;
  name: string;
  color: string;
  units: number;
  isActive: Boolean;
  country: [];

  constructor(name, color) {
    this.name = name
    this.color = color

  }
}
