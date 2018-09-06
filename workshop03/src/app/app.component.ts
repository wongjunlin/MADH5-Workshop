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

    console.log("people id in search: ", form.value.peopleId);

    this.swdbService.find(form.value.peopleId)
      .then(
        // resolve
        (result) => {
          console.log("from cache in search: ", result)
          return null;
        },

        // reject
        this.swService.searchPeople.bind(this.swService)

      )
      .then(this.swdbService.save.bind(this.swdbService)) // resolve
      .catch(err => { // reject
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
