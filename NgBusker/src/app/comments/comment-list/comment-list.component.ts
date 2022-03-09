
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/post.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  commentsList:IComment[];

    
pathId:string;

  constructor(
    private postService:PostService,
    private route:ActivatedRoute) {
    this.commentsList=[];

    this.pathId="";
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.pathId=params["postId"];
    })
    this.postService.loadCurrentComments(this.pathId).subscribe(cmts=>{
      this.commentsList=cmts;
    
      
    })
  }



}