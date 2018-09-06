import { Injectable } from "@angular/core";
import { People } from './models';
import Dexie from 'dexie';
import { resolve } from "../../node_modules/@types/q";

@Injectable()
export class StarWarsStorageService {

    private db : Dexie;

    constructor() {
        // Create database
        this.db = new Dexie('swDB');

        // Create schema
        this.db.version(1).stores ({
            people: 'id, image, name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, homeworld, films, species, vehicles, starships, created, edited, url'
        });
    }

    find(id : number) : Promise<People> {
        return (
            new Promise((resolve, reject) => 
            {
                this.db['people'].where('id').equals(id)
                    .toArray()
                    .then((result : People[]) => {
                        if (result.length > 0)
                        {
                            resolve(result[0]);
                        }
                        else
                        {
                            reject(id);
                        }
                    })
            })
        )
    }

    save(data : People) : Promise<number> {
        // console.log("swStorageService: ", data);

        if (data) 
        {
            console.log("swStorageService: saved");
            
            return (
                this.db['people'].put(data)
            );
        }
    }
}