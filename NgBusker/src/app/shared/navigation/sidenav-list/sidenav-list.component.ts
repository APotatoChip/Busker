import { Component,Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/feature/user/user.service';

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
  
  logoutHandler():void {
    this.userService.logout().subscribe();
    this.onSidenavClose();
  }

   onSidenavClose():void{
    this.sidenavClose.emit();
  }

}
