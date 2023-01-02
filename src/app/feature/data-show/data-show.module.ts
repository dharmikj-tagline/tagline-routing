import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataShowRoutingModule } from './data-show-routing.module';
import { DataComponent } from './data/data.component';
import { DataShowComponent } from './data-show/data-show.component';


@NgModule({
  declarations: [
    DataComponent,
    DataShowComponent
  ],
  imports: [
    CommonModule,
    DataShowRoutingModule
  ]
})
export class DataShowModule { }
