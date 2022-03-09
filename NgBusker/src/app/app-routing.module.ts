import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HeroComponent,
  },
  {
    path:"map",
    component:MapComponent
  },{
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),
    component:UserComponent
  },
  {
    path:'search',
    component:SearchComponent
  }
 ,
  {
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
