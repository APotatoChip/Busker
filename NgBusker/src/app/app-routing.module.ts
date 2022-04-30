import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './feature/hero/hero.component';
import { MapComponent } from './feature/map/map.component';
import { UserComponent } from './feature/user/user.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { SearchComponent } from './feature/search/search.component';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HeroComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"map",
    component:MapComponent,
  },{
    path:'user',
    loadChildren:()=>import('./feature/user/user.module').then(m=>m.UserModule),
    component:UserComponent
  
  },
  {
    path:'search',
    component:SearchComponent,
    data:{isLogged:true},
    canActivate:[AuthGuard]
  }
 ,{
    path:'**',
    component:NotFoundComponent,
    data:{
      title:'404'
    }
  }
  
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
