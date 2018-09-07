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

    getAll(): Promise<People[]> {
        return (
            this.db['people'].orderBy('name')
            .toArray()
        );
    }

    find(id : number) : Promise<People> {
        return (
            new Promise((resolve, reject) => 
            {
                this.db['people'].where('id').equals(id)
                    .toArray()
                    .then((result : People[]) => {
                        console.log("Result length: ", result.length);
                        if (result.length > 0)
                        {
                            console.log("Result swss: ", result);
                            resolve(result[0]);
                        }
                        else
                        {
                            console.log("Result swss not found for id: ", id);
                            reject(id);
                        }
                    })
            })
        );
    }

    getPeopleDetail(id : number) : Promise<People[]> {

        console.log("swStorageService id in detail: ", id);

        return (
            this.db['people'].where('id').equals(id)
            .toArray()
        );
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