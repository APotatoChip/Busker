import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],exports:[
    PostListComponent
  ]
})
export class PostModule { }
