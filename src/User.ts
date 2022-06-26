import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMaps';

export class User implements Mappable {
    name: String;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(){
        return `User Name: ${this.name}`;
    }
}