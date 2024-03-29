
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommentListComponent } from './comment-list/comment-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { ReplyCommentItemComponent } from './reply-comment-item/reply-comment-item.component';

import { PostService } from 'src/app/core/services/post.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommentListComponent,
  AddCommentComponent,
  CommentListItemComponent,
  CommentListItemComponent,
  ReplyCommentItemComponent
],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers:[
    PostService
  ],
  exports:[
    CommentListComponent,
    CommentListItemComponent
  ]
})
export class CommentsModule { }
