import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { OtherUserComponent } from './other-user/other-user.component';
import { NotFoundComponent } from '../not-found/not-found.component';



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
  data:{isLogged:true},
  canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class UserRoutingModule { }
