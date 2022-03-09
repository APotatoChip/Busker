import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { CommentsModule } from '../comments/comments.module';

import { PostService } from '../shared/post.service';

import { PostComponent } from './post/post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';


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
