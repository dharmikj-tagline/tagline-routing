import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AdminModule } from '../feature/admin/admin.module';
import { UserModule } from '../feature/user/user.module';


@NgModule({
  declarations: [
    HeaderNavComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AdminModule,
    UserModule
  ],
  exports:[
    HeaderNavComponent,
    AdminModule,
    UserModule
  ]
})
export class SharedModule { }
