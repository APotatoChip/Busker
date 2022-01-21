import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:string;
count:number;
  constructor() {
    this.count=0;
    this.comments="lala";
   }

  ngOnInit(): void {
    this.count=10;
  }

  recieveComments($event:string):void{
this.comments=$event;
this.count=this.comments.length;
console.log(this.comments.length);

  }

  recieveCount($event:string):void{
this.comments=$event;
this.count=this.comments.length;
  }
}
