import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsStorageService } from '../starwars.storage.service';
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(private swdbService : StarWarsStorageService,
    private swService : StarWarsService,
    private router: Router) { 

  }

  ngOnInit() {
  }

  cancelAdd() {
    this.router.navigate(['/']);
  }

  save(form : NgForm) {
    console.log("Form: ", form.value.peopleId);

    this.swdbService.find(form.value.peopleId)
      .then(
        // resolve
        () => {
          this.router.navigate(['/']);
          throw false;
        },
        // reject
        this.swService.searchPeople.bind(this.swService)
      )
      .then(this.swdbService.save.bind(this.swdbService)) // resolve
      .then(id => {
        console.log("id result: ", id);
        this.router.navigate(['/'], {
          queryParams: {
            message: `Saved ${id}`
          }
        })
      })
      .catch(err => { // reject
        if (!err) {
          return;
        }
        console.error('>>> error: ', err)
      })

    form.resetForm();
  }
}
