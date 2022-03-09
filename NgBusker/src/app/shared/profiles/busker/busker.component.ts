import { Component, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
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
  constructor() { }

  ngOnInit(): void {
  }

}
