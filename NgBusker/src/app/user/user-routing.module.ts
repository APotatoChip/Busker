import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from '../core/guards/auth.guard';
import { SearchComponent } from '../search/search.component';
import { CurrentUserComponent } from '../shared/profiles/current-user/current-user.component';
import { OtherUserComponent } from './other-user/other-user.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    data:{isLogged:false},
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    data:{isLogged:false},
    canActivate:[AuthGuard]
  }
, { 
   path:'profile',
   component: ProfileComponent,
   data:{isLogged:true},
   canActivate:[AuthGuard]
  //  loadChildren:()=>import('../shared/shared.module').then(m=>m.SharedModule),

},{
  path:':userId',
  component:OtherUserComponent,
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class UserRoutingModule { }
