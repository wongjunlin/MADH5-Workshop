import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { AddFriendComponent } from './components/add-friend.component';
import { AddressBookComponent } from './components/address-book.component';
import { AddressService } from './address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    AddressBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
