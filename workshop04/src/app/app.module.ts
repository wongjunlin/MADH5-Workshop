import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleListComponent } from './components/people-list.component';
import { AppRoutesModule } from './/app-routes.module';
import { StarWarsService } from './starwars.service';
import { StarWarsStorageService } from './starwars.storage.service';
import { AddPeopleComponent } from './components/add-people.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleDetailComponent } from './components/people-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ StarWarsService, StarWarsStorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
