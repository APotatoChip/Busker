import { Component,  OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
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
userId:any;
user:any;
  


  constructor(
    private postService:PostService,private router:Router, private userService:UserService ) {
      this.postBool=false;
      this.user=this.userService.currentUser;
   }
 

  ngOnInit(): void {
    this.userId = this.router.url.includes("profile")? this.user._id : this.router.url.split("/")[2];
   
    
    this.postService.loadProfilePosts(this.userId).subscribe(res=>{
      this.postList=res.posts;
      this.username=res.username;
      console.log(this.username);
      

      if(this.postList.length===0){
        this.postBool=false;
      } else{
        this.postBool=true;
      }
      
    })



   
  }

}
