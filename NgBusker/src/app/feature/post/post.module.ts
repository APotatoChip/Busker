import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { CommentsModule } from '../comments/comments.module';


import { PostComponent } from './post/post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProfilesModule } from '../profiles/profiles.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommentsModule,
    CoreModule,
    SharedModule,
    ProfilesModule
  
  ],
  exports:[
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
   
  ]
})
export class PostModule { }
