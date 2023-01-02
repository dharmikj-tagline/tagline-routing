import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFindComponent } from './data-find/data-find.component';
import { DynamicComponent } from './dynamic.component';

const routes: Routes = [
  {
    path:'',
    component : DynamicComponent, 
  },
  {
    path:'dynamic/:id',
    component : DataFindComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
