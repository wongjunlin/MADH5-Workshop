import { Component, OnInit } from '@angular/core';
import { StarWarsStorageService } from '../starwars.storage.service';
import { People } from '../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  canShare : Boolean = false;
  char : People ;

  
  constructor(private swdbSvc : StarWarsStorageService, 
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.canShare = !!navigator['share'];
    const cid = parseInt(this.activatedRoute.snapshot.params.id);

    console.log("ID in detail: ", cid);

    this.swdbSvc.getPeopleDetail(cid)
      .then((result) => {
        console.log("Result in detail: ", result);
        this.char = result[0];
      })
      .catch(err => {
        console.log('>>> Error unable to find here: ', err);
      })
  }

  goBackHome() {
    this.router.navigate(['/']);
  }

  share() {
      navigator['share'] ({
        title: 'HELLO!',
        text: `I AM SHARING ${this.char.name} with the world!`,
        url: 'https://github.com/wongjunlin/MADH5-Workshop'
      })
  }
}
