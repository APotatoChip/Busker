import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {

  commentForm!:FormGroup;
  commentInfo:Array<object>=[];
  submitted:Boolean=false;
  public id=0;
  @Output() userComment=new EventEmitter();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.commentForm=this.formBuilder.group({
  comment:['',[Validators.required,Validators.minLength(6),Validators.maxLength(100)]]
    });
  }

  onSubmit():any{
    this.submitted=true;
    if(this.commentForm.invalid){
      return false;
    }else{
      this.commentInfo.push({
        commentId:this.id++,
        currentDate:new Date(),
        commentTxt:this.commentForm.controls['comment'].value,
        replyComment:[]
      });
      this.userComment.emit(this.commentInfo);
    }
  }

}
