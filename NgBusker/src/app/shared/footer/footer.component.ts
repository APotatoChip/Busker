import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  onActivate() {
      window.scrollTo({behavior:'smooth',top:0}); // how far to scroll on each step
  }
  
}
