import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../shared/interfaces';

const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  addCommentToPost(data:any):Observable<any>{
console.log(data);
    
    const postId=data.postId;
return this.http.post<any>(`${apiUrl}/profile/${postId}/comment`,data,{withCredentials:true});
  }
}
