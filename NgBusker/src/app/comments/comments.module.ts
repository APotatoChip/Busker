import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { ChildboxComponent } from './childbox/childbox.component';
import { CommentsComponent } from './comment/comment.component';



@NgModule({
  declarations: [
  CommentboxComponent,
  ChildboxComponent,CommentsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[
    CommentboxComponent
  ]
})
export class CommentsModule { }
