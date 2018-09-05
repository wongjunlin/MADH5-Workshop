import { Component, OnInit } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material';
import { AddFriendComponent } from './components/add-friend.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    
    this.getAddresses(0);
  }

  private addressSvc: AddressService;
  addresses: Address[] = [];
  
  private tabs = [
    { label: 'A-E', pattern: /^[a-e].*/i },
    { label: 'F-J', pattern: /^[f-j].*/i },
    { label: 'K-O', pattern: /^[k-o].*/i },
    { label: 'P-T', pattern: /^[p-t].*/i },
    { label: 'U-Z', pattern: /^[u-z].*/i }
  ];

  constructor(svc: AddressService){
    this.addressSvc = svc;
  }

  processAddressItem(address : Address) {
    console.log(">>> ", address);

    this.addressSvc.addNewAddress(address)
    .then(result => {
      console.log("Saved: ", result);

      this.getAddresses(0);

    })
    .catch(err => {
      console.log('err: ', err);
    } );
  }

  loadAddress(event: MatTabChangeEvent) {

    this.getAddresses(event.index);
    
  }

  getAddresses(index : number) {

    this.addressSvc.getAddresses(this.tabs[index].pattern)
      .then(addr => {
        this.addresses.length = 0;

        console.log('address loading on tab switching: ', addr);
        
        for (let a of addr) {
          this.addresses.push(a);
        }
      })
      .catch(err => {
        
        console.log("err on tab switching: ", err);
      
      })

  }
}
