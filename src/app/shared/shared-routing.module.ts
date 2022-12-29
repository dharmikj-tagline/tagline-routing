import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderContentComponent } from './header-content/header-content.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'',
    component : HeaderContentComponent
  },
  {
    path:'services',
    component : ServicesComponent
  },
  
  {
    path:'**',
    component : HeaderNavComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
