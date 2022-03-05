import { Component, OnInit } from '@angular/core';
import { IComment, IPost } from 'src/app/interfaces';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?:IPost;
  pathId:string;

  constructor(
    private postService:PostService,
    private route:ActivatedRoute) { 
      this.pathId="";
      
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.pathId=params["postId"];
    })

    this.postService.loadCurrentPost(this.pathId).subscribe(post=>{
      this.post=post;

      
    })

  
    
  }
  
  

}
