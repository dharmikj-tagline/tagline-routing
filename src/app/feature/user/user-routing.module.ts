import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component : DashboardComponent,   
  },
  {
    path:'dashboard',
    component : HomeComponent,
    children :[
      {
        path:'home',
        component : HomeComponent
      }
    ]
  },
  {
    path:'**',
    component : DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
