
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/shared/interfaces';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-reply-comment-item',
  templateUrl: './reply-comment-item.component.html',
  styleUrls: ['./reply-comment-item.component.css']
})
export class ReplyCommentItemComponent implements OnInit {

  @Input() reply?:IComment; //returns id of replyComment
  pathId:string;
  replyCommentsList:IComment[];

  constructor(
    private postService:PostService,
    private route:ActivatedRoute
  ) 
  { 
    this.pathId="";
    this.replyCommentsList=[];
    
  }

  ngOnInit() {
    // Should make a query
    this.route.params.subscribe(params=>{
      this.pathId=params["postId"];
    });

    this.postService.loadReplyComment(this.pathId,this.reply as any).subscribe(cmts=>{
      this.replyCommentsList=cmts;    
    })
    
  }

}
