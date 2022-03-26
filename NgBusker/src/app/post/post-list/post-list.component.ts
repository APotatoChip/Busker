import { Component,  OnInit  } from '@angular/core';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList:any;
  usernameList:any;
  


  constructor(
    private postService:PostService,
    ) {
     
   }
 

  ngOnInit(): void {
    this.postService.loadProfilePosts().subscribe(res=>{
      this.postList=res.posts;
       this.usernameList=res.usernameArr;
       let count=0
       for (const post of this.postList) {
         post.author=this.usernameList[count];
         count++;
        }  
    })

   
  }

}
