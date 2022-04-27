import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IComment } from 'src/app/shared/interfaces';
import { UploadFileService } from 'src/app/shared/profiles/upload-file.service';
import { UserService } from 'src/app/user/user.service';
import { environment } from 'src/environments/environment';

 const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {
  @Input() comment?:IComment;
  currUsername?:string;
  username?:string;
  imgUrl?:string;
  urlBlob?:any;
  link?:string;
  isAuthor?:boolean;

  constructor(private userService:UserService, private uploadService:UploadFileService, private sanitizer:DomSanitizer,private router:Router) { }

  ngOnInit(): void {
    
   
    this.currUsername= this.userService.currentUser?.username;
this.userService.getUserById(this.comment?.author).subscribe((user)=>{
 this.username=user.username;
 if(this.currUsername==this.username){
  this.link='../../../profile'
 }else{
  this.link=`../../../${this.comment?.author}`;
 }
 this.imgUrl=user?.avatar.split("\\")[2];
 //console.log(this.user?.avatar);
 //retrieving the image from the backend static folder as a blob, sanitazing url and displaying it 
 this.uploadService.getAvatar(this.imgUrl).subscribe((img)=>{
   
   
    const objectURL  =URL.createObjectURL(img);
    const test = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.urlBlob=test;
    
    return this.urlBlob

 });
  
})

  }

}
