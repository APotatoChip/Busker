import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IComment, IPost, IUser } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/post.service';
import { UploadFileService } from 'src/app/shared/profiles/upload-file.service';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  providers:[DatePipe]
})
export class AddCommentComponent implements OnInit {
user:any;
imgUrl:any;
urlBlob:any;
  constructor(private postService:PostService,private router:Router,private datePipe:DatePipe,private uploadService:UploadFileService,private sanitizer:DomSanitizer,private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.currentUser;
    this.imgUrl=this.user?.avatar.split("\\")[2];
    //retrieving the image from the backend static folder as a blob, sanitazing url and displaying it 
    
    this.uploadService.getAvatar(this.imgUrl).subscribe((img)=>{
      
       const objectURL  =URL.createObjectURL(img);
       const test = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       this.urlBlob=test;
       
       return this.urlBlob

    });
  }

  submitCommentFormHandler(formValue:{author:any,postedAt:any,postId:string,textContent:string,likes:number,replyComments:IComment[] }){
    formValue.author=this.userService.currentUser;
    formValue.postedAt=new Date();
    formValue.postedAt=this.datePipe.transform(formValue.postedAt,'yyyy-MM-dd')
    formValue.postId=this.router.url.split("/")[3];
    formValue.likes=0;
    formValue.replyComments=[];
     
    let currUrl = this.router.url;
    this.postService.addCommentToPost(formValue).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currUrl]);
    });
    
  })
}

}
