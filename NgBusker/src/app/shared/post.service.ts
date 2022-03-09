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
