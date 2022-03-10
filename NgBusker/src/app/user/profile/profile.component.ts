import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, DoCheck {
isLogged=true;
  constructor(private userService:UserService) { }

  ngDoCheck(): void {
     // this.isLogged=this.userService.isLogged;
  }

  ngOnInit(): void {
  }
  
}
