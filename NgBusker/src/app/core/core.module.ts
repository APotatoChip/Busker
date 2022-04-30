import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { UploadFileService } from './services/upload-file.service';
import { UserService } from '../feature/user/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,  
  ],
  providers:[
    AuthGuard,
    UploadFileService,
    UserService,
    PostService,
    CommentService
  ],
  exports:[ ]
})
export class CoreModule { }
