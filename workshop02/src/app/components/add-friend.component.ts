import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Address } from '../model'


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  address 

  @Output()
  newAddressItem = new EventEmitter<Address>();

  processForm(form: NgForm) {
    console.log(">>> ", form.value);
    
    //construct payload
    const address: Address = {
      name: form.value.nameField,
      address: form.value.addressField,
      phone: form.value.phoneField,
      email: form.value.emailField,
    };

    //fire event with payload
    this.newAddressItem.next(address);

    form.resetForm();
  }

}
