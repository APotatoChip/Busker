import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from '../shared/profiles/profiles.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'register',
    component:RegisterComponent
  }
, { 
   path:'profile',
   component: ProfilesComponent
  //  loadChildren:()=>import('../shared/shared.module').then(m=>m.SharedModule),

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class UserRoutingModule { }
