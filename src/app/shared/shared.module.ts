import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ServicesComponent } from './services/services.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { AdminModule } from '../feature/admin/admin.module';


@NgModule({
  declarations: [
    HeaderNavComponent,
    ServicesComponent,
    HeaderContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AdminModule
  ],
  exports:[
    HeaderNavComponent,
    ServicesComponent,
    AdminModule
  ]
})
export class SharedModule { }
