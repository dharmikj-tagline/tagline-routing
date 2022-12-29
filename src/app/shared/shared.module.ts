import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';


@NgModule({
  declarations: [
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderNavComponent
  ]
})
export class SharedModule { }
