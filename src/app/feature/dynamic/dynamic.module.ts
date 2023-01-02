import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { DataFindComponent } from './data-find/data-find.component';


@NgModule({
  declarations: [
    DynamicComponent,
    DataFindComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  exports :[
    DynamicComponent
  ]
})
export class DynamicModule { }
