import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 600,
    });
}

  public onToggleSidenav= () =>{
    this.sidenavToggle.emit();
  }

}
