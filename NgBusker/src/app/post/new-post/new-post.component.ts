import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { UploadFileService } from 'src/app/shared/profiles/upload-file.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
imgUrl:any;
user:any;
urlBlob:any;
  constructor(private uploadService:UploadFileService,private sanitizer:DomSanitizer,private postService:PostService,private route:ActivatedRoute, private router:Router, private userService:UserService) { }

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

  
  createPostHandler(textContent:any){
    
    let currUrl = this.router.url;
    this.postService.createPost({textContent}).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currUrl]);
        
    });
  
      
    });
   
    
  }

}
