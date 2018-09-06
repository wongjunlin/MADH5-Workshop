import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { HttpClientModule } from '@angular/common/http';

import { StarWarsService } from './starwars.service';
import { StarWarsStorageService } from './starwars.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [StarWarsService, StarWarsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
