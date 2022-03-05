
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommentListComponent,
  AddCommentComponent,
  CommentListItemComponent,
  CommentListItemComponent
],
  imports: [

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
   
  ],
  exports:[
    CommentListComponent,
    CommentListItemComponent
  ]
})
export class CommentsModule { }
