
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';



@NgModule({
  declarations: [
  CommentComponent,
  AddCommentComponent
],
  imports: [

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  exports:[
CommentComponent
  ]
})
export class CommentsModule { }
