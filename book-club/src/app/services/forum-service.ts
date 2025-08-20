import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../models/thread.type';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly url = 'http://localhost:3000/threads'
  private http = inject(HttpClient)

  getAllThreads(): Observable<Thread[]>{
    return this.http.get<Thread[]>(this.url)
  }

  postThread(title: String){
    return this.http.post(this.url, {title}, {withCredentials: true})
  }
  
}
