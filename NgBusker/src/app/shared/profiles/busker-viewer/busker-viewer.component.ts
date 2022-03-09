import { Component, OnInit } from '@angular/core';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-busker-viewer',
  templateUrl: './busker-viewer.component.html',
  styleUrls: ['./busker-viewer.component.css']
})
export class BuskerViewerComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
