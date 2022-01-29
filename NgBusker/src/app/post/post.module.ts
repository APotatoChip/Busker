import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { CommentsModule } from '../comments/comments.module';
import { CommentComponent } from '../comments/comment/comment.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    PostComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommentsModule
  
  ],
  exports:[
    PostComponent,
    PostListItemComponent,
    NewPostComponent
  ]
})
export class PostModule { }
