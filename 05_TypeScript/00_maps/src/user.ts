import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  // implements, creates direct dependency on Mappable interface.
  // if we fail to correctly implement a class TS will direct us to the error
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
