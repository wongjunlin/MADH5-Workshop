import { Component, OnInit } from '@angular/core';
import { StarWarsStorageService } from '../starwars.storage.service';
import { People } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people : People[] = [];

  constructor(private swdbSvc : StarWarsStorageService, 
    private activatedRoute : ActivatedRoute,
    private snackBar: MatSnackBar,
    private router : Router) { }

  ngOnInit() {
    this.swdbSvc.getAll()
      .then(result => {
        this.people = result;
        console.log('People: ', this.people);
      })
      .catch(err => {
        console.log('Error: ', err);
      })

    // if (this.activatedRoute.snapshot.queryParams.message) {
    //   console.log('opening snackbar')
    //   this.snackBar.open(this.activatedRoute.snapshot.queryParams.message, 
    //     '', { duration: 2500 })
    // }
  }

  addPeople() {
    this.router.navigate(['/add']);
  }

}
