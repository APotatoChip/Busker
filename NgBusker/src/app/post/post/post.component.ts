import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces';
import { PostService } from '../../shared/post.service';
import { ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?:any;
  pathId:string;
  postDate:String = "";

  constructor(
    private postService:PostService,
 private route:ActivatedRoute) { 
      this.pathId="";
      this.post
      
  }
 

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.pathId=params["postId"];
    })

  
    
    this.postService.loadCurrentPost(this.pathId).subscribe(post=>{
      this.post=post.post;
      this.post.author=post.user.username;
      
      this.postDate= this.postService.formatDateTime(this.post?.postedAt);
    })
    

   

  
    
  }
  
  

}
