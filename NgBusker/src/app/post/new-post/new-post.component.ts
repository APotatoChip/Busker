import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:PostService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  

  createPostHandler(textContent:any){
    
    let currUrl = this.router.url;
    this.postService.createPost({textContent}).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currUrl]);
        
    });
  
      
    });
   
    
  }

}
