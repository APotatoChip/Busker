import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { CommentsModule } from '../comments/comments.module';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from '../post.service';
import { PostListComponent } from './post-list/post-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommentsModule,
    CoreModule,
    SharedModule
  
  ],
  providers:[
    PostService
  ],
  exports:[
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
   
  ]
})
export class PostModule { }
