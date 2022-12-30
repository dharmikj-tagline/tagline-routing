import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { HeaderContentComponent } from './feature/header-content/header-content.component';
import { ServicesComponent } from './feature/services/services.component';

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
    path:'**',
    component : HeaderNavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
