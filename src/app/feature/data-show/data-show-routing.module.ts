import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataShowComponent } from './data-show/data-show.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path:'',
    component : DataComponent
  },
  {
    path:'data/:id',
    component : DataShowComponent
  },
  {
    path:'**',
    component : DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataShowRoutingModule { }
