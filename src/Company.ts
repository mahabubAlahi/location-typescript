import { faker } from '@faker-js/faker'


export class Company {
    companyName: String;
    catchPhrase: String;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}