import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  loadProfilePosts():Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/profile/post`);
  }
}
