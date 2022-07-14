import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: string[] = [];
  astronauts: string[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    }
    return sum;
  }
  currentMassKg(): number {}
}
