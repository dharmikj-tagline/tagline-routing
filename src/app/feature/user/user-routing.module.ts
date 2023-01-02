import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component : DashboardComponent, 
  },
  {
    path:'dashboard/:profile',
    component : ProfileComponent,
  },

  // {
  //   path:'dashboard/:home',
  //   component : HomeComponent,
  // children : [
  //   {
  //     path:'dashboard/:profile',
  //     component : ProfileComponent,
  //   },
  //   {
  //     path:'dashboard/:home',
  //     component : HomeComponent,
  //   }
  // ]  
  // },
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
