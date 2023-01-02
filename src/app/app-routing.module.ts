import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { HeaderContentComponent } from './feature/header-content/header-content.component';
import { ServicesComponent } from './feature/services/services.component';
import { DynamicComponent } from './feature/dynamic/dynamic.component';

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
    path:'user',
    loadChildren : ()=> import ('./feature/user/user.module').then(m=>m.UserModule)
  },
  {
    path:'admin',
    loadChildren : ()=> import ('./feature/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'dynamic',
    loadChildren : ()=> import ('./feature/dynamic/dynamic.module').then(m=>m.DynamicModule)
  },
  {
    path:'data-show',
    loadChildren : ()=> import ('./feature/data-show/data-show.module').then(m=>m.DataShowModule)
  },
  {
    path:'**',
    component : HeaderContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
