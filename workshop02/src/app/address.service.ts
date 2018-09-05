import { Injectable } from "@angular/core";

import Dexie from 'dexie';
import { Address } from "./model";

@Injectable()
export class AddressService {

    
    private db : Dexie;

    constructor() {
        // Create database
        this.db = new Dexie('addressDB');

        // Create schema
        this.db.version(1).stores ({
            address: 'email, name, address, phone'
        });
    }

    addNewAddress(address : Address) : Promise<string> {
        return (this.db['address'].put(address));
    }

    getAddresses(pattern : any) : Promise<Address[]> {
        return (
            this.db['address']
                .orderBy('name')
                .filter(addr => {
                    return (pattern.test(addr.name));
                })
                .toArray()
        );
    }

}