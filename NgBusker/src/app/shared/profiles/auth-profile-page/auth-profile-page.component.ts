import { Component, Input, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/user/user.service';
import {NgForm} from '@angular/forms';
import { UploadFileService } from '../upload-file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-profile-page',
  templateUrl: './auth-profile-page.component.html',
  styleUrls: ['./auth-profile-page.component.css']
})
export class AuthProfilePageComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  username?:String;
  isPerformer?:boolean;
  isInEditMode?:boolean;
  selectedFile?:File;
  imgUrl?:string;
  urlBlob:any;
  
  get user(){
    return this.userService.currentUser;
  }
  constructor(private router:Router,private userService:UserService,private uploadService:UploadFileService, private sanitizer: DomSanitizer) { 
    this.isInEditMode=false;

  }

  ngOnInit(): void {
    
    
    this.isPerformer=this.userService.isPerformer;
    this.username=this.userService.currentUser?.username;
    this.imgUrl=this.user?.avatar.split("\\")[2];
    //console.log(this.user?.avatar);
    //retrieving the image from the backend static folder as a blob, sanitazing url and displaying it 
    this.uploadService.getAvatar(this.imgUrl).subscribe((img)=>{
      
      
       const objectURL  =URL.createObjectURL(img);
       const test = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       this.urlBlob=test;
       
       return this.urlBlob

    });
    
    
    
    
  }

  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
    //console.log(event.target.files[0]);
    
  }
  

  updateProfile(form:NgForm){
   // console.log("hi");
    if(form.invalid){
  return;
}



// this.uploadService.getFiles().subscribe((Res:any)=>{
//   console.log(Res);
  
// });

this.uploadService.upload(this.selectedFile).subscribe((res:any)=>{
  //console.log(res);
  
})


this.userService.updateProfile(form.value).subscribe({
  
  next:()=>{
    this.isInEditMode=false;
   window.location.reload();
   
  },
  error: (err) => {
    console.error(err);
  }
  
});
  }

}

