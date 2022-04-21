import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as AOS from 'aos';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  
  get isLogged():boolean {
    return this.userService.isLogged;
  }
  constructor(public userService:UserService,private router:Router) { 

  }

  ngOnInit(): void {
    AOS.init({
      duration: 600,
    });
}


logoutHandler():void {
  this.userService.logout().subscribe(() => this.router.navigate(['/user/login']));
}

  public onToggleSidenav= () =>{
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
  }

}
