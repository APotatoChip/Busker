import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'profile/:postId/comment',
    component:PostComponent,
    data:{isLogged:true},
    canActivate:[AuthGuard],
    
  },
  {
    path:':userId/:postId/comment',
    component:PostComponent,
    data:{isLogged:true},
    canActivate:[AuthGuard],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
