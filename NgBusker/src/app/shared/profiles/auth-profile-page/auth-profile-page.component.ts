import { Component, Input, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/user/user.service';
import {NgForm} from '@angular/forms';

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
  
  get user(){
    return this.userService.currentUser;
  }
  constructor(private userService:UserService) { 
    this.isInEditMode=false;

  }

  ngOnInit(): void {
    
    
    this.isPerformer=this.userService.isPerformer;
    this.username=this.userService.currentUser?.username;
    
  }

  updateProfile(form:NgForm){
    console.log("hi");
    if(form.invalid){
  return;
}

this.userService.updateProfile(form.value).subscribe({
  next:()=>{
    this.isInEditMode=false;
  },
  error: (err) => {
    console.error(err);
  }
});
  }

}
