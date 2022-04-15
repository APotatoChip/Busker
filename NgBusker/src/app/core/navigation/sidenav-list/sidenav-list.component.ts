import { Component,Output,EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent  {

  @Output() sidenavClose = new EventEmitter();

  get isLogged():boolean {
    return this.userService.isLogged;
  }
  constructor(public userService:UserService) { }

  
  loginHandler():void {
    //this.userService.login();
  }

  logoutHandler():void {
    this.userService.logout();
  }
  public onSidenavClose=()=>{
    
    
    this.sidenavClose.emit();
  }

}
