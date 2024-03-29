import { Component, OnInit, Input} from '@angular/core';
import { IPost} from 'src/app/shared/interfaces';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  

  postDate:String = "";

  

  @Input() post?:IPost;
  @Input() username?:String;

  constructor(private postService:PostService) { 
    
  }

  ngOnInit(): void {
   this.postDate= this.postService.formatDateTime(this.post?.postedAt);

  }

  

}
