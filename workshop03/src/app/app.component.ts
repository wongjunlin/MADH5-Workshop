import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from './starwars.service';
import { People } from './models';
import { StarWarsStorageService } from './starwars.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (
    private swService : StarWarsService, 
    private swdbService : StarWarsStorageService
  ) { }

  search(form: NgForm) {

    console.log("people id: ", form.value.peopleId);

    this.swdbService.find(form.value.peopleId)
      .then(
        (result) => {
          console.log("from cache: ", result)
          // return null;
        },
        // (id) => {
        //   console.log("not in database: ", id)
        // }

        this.swService.searchPeople.bind(this.swService)
        
        // (err) => {
        //   console.log("people id not found: ", err)
        // }

      )
      .then(this.swdbService.save.bind(this.swdbService))
      .catch(err => {
        console.error('err: ', err)
      })


    // this.swService.searchPeople("people", form.value.peopleId)
      
    // .then(this.swdbService.save.bind(this.swdbService))
    
    //   // .then((result : People) => {
    //   //   console.log("People: ", result);
    //   //   this.swdbService.save(result);
    //   // })
      
    //   .catch(err => {
    //     console.log("Error: ", err);
    //   })

    form.resetForm();
  }

}
