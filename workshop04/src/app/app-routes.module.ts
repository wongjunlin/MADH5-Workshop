import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddPeopleComponent } from './components/add-people.component';
import { PeopleDetailComponent } from './components/people-detail.component';

const ROUTES : Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'add', component: AddPeopleComponent },
  { path: 'detail/:id', component: PeopleDetailComponent },

  // wild card to catch all
  { path: '**', redirectTo:'/', pathMatch:'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
