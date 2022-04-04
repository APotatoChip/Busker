import { Component,  OnInit  } from '@angular/core';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
postBool:boolean;
  postList:any;
username:any;
  


  constructor(
    private postService:PostService,
    ) {
      this.postBool=false;
   }
 

  ngOnInit(): void {
    this.postService.loadProfilePosts().subscribe(res=>{
      this.postList=res.posts;
      this.username=res.username;

      if(this.postList.length===0){
        this.postBool=false;
      } else{
        this.postBool=true;
      }
      
    })



   
  }

}
