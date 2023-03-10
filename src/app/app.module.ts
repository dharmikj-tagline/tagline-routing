import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataShowModule } from './feature/data-show/data-show.module';
import { DynamicModule } from './feature/dynamic/dynamic.module';
import { HeaderContentComponent } from './feature/header-content/header-content.component';
import { ServicesComponent } from './feature/services/services.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HeaderContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DynamicModule,
    DataShowModule
  ],
  exports : [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
