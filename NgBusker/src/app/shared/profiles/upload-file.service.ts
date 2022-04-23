import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }
  
  upload(file: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file );
    const req = new HttpRequest('POST', `${apiUrl}/upload`, formData, {
      withCredentials:true,
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${apiUrl}/files`);
  }
}
