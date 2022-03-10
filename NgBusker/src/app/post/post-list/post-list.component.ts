import { Component,  OnInit  } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList:IPost[];


  constructor(
    private postService:PostService,
    ) {
     this.postList=[];
   }
 

  ngOnInit(): void {
    this.postService.loadProfilePosts().subscribe(postList=>{
      this.postList=postList;
    })
  }

}
