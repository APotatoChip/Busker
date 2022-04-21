import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
route:any;
  constructor(private router:Router) { 

  
  }

  ngOnInit(): void {
    this.route=this.router.url;
    
    
  }

  onActivate() {
            window.scrollTo({behavior:'smooth',top:0}); // how far to scroll on each step
          
  
}

 

}
