import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';

const routes: Routes = [
  {
    path:'',
    component : HeaderNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
