import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IComment, IPost } from './interfaces';


const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  formatDateTime(unfromatedDate:any):String{
    let date="";
    let time="";

  date =unfromatedDate.split("T")[0].replace("-","/").replace("-","/");
   time = unfromatedDate.split("T")[1].split(".")[0].substring(0,5);
   return date+" at "+time;
  
  }

  getAuthorName(authorId:any):Observable<any>{
    //  console.log(this.http.get(`${apiUrl}/profile`,authorId);
     
    return this.http.get(`${apiUrl}/profile`,authorId)
}

  createPost(data:String):Observable<IPost>{
    return this.http.post<IPost>(`${apiUrl}/profile/post`,data);
  }
  loadProfilePosts():Observable<IPost[]> {    
    return this.http.get<IPost[]>(`${apiUrl}/profile/post`);
  }
  loadCurrentPost(postId:string):Observable<IPost>{
    return this.http.get<IPost>(`${apiUrl}/profile/${postId}`)
  }
  loadCurrentComments(postId:string):Observable<IComment[]>{
    return this.http.get<IComment[]>(`${apiUrl}/profile/${postId}/comment`)
  }
  loadReplyComment(postId:string,commentId:string):Observable<IComment[]>{
    return this.http.get<IComment[]>(`${apiUrl}/profile/${postId}/comment/${commentId}`)
  }

}
