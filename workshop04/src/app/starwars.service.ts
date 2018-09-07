import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { People } from './models';

const apiUrl = "https://swapi.co/api/people/";

@Injectable()
export class StarWarsService {


    constructor(private http : HttpClient) { }

    searchPeople(id : number) : Promise<People> {
        
        // console.log("Cat: ", cat);
        console.log("Id in swService: ", id);

        return (
            this.http.get<People>(apiUrl + id)
                .toPromise()
                .then(res => {
                    res.id = id;
                    res.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                    return res;
                })
        );

        // cat = "people";
        // return (
        //     this.http.get<People>(`https://swapi.co/api/${cat}/${id}`)
        //         .toPromise()
        //         .then(res => {
        //             res.id = id;
        //             res.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        //             return res;
        //         })
        // );
    }
}