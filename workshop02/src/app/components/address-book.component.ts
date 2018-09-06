import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../model'

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  @Input()
  addresses: Address[] = [];

  constructor() { }

  ngOnInit() {
  }

}
