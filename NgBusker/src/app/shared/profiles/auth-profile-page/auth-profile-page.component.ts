import { Component, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/user/user.service';

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
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.isPerformer=this.userService.isPerformer;
    this.username=this.userService.currentUser?.username;
  }

}
