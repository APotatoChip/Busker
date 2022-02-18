import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@angular/router';
import { IComment, IPost } from 'src/app/interfaces';
import { PostService } from 'src/app/post.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?:IPost;
  comments:IComment[];
pathId:string;
  constructor(
    private postService:PostService,
     private route:ActivatedRoute) { 
      
       this.comments=[];
    this.pathId="";
    
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.pathId=params["postId"];
    })

    this.postService.loadCurrentPost(this.pathId).subscribe(post=>{
      this.post=post;
      console.log(this.post);
      
    })

    this.postService.loadCurrentComments(this.pathId).subscribe(cmts=>{
      this.comments=cmts;
      console.log(this.comments);
    })
    
  }
  
  

}
