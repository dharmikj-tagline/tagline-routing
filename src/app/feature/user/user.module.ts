import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports : [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class UserModule { }
