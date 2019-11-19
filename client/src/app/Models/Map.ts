import {Player} from "./Player";

export class Map {
  name: string;
  Players: [Player];
  nbOfPlayers:number
  units: number;
  isActive: Boolean;
  country: [];
  Continent:[];

  constructor(name, nbOfPlayers) {
    this.nbOfPlayers = nbOfPlayers
    this.name = name;
  }
}
