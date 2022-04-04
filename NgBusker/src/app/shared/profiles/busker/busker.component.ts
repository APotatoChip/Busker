import { Component, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-busker',
  templateUrl: './busker.component.html',
  styleUrls: ['./busker.component.css']
})
export class BuskerComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  username?:String;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.username=this.userService.currentUser?.username;
  }

}
