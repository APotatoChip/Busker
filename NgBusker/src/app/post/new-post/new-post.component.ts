import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  

  createPostHandler(textContent:any){
    
    
    this.postService.createPost({textContent}).subscribe((res)=>{
      //console.log(res);
      
    });
   
    
  }

}
