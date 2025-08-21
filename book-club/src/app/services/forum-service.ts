import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../models/thread.type';
import { Post } from '../models/post.type';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly url = 'http://localhost:3000/threads'
  private readonly postUrl = 'http://localhost:3000/threads/:threadId/posts'
  private http = inject(HttpClient)

  getAllThreads(): Observable<Thread[]>{
    return this.http.get<Thread[]>(this.url)
  }

  getThreadById(threadId: string): Observable<Thread>{
    return this.http.get<Thread>(`${this.url}/${threadId}`)
  }

  postThread(title: String, content: String){
    return this.http.post(this.url, {title, content}, {withCredentials: true})
  }

  getCommentsForAThread(id: String): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}/${id}/posts`)
  }

  postCommentToThread(content: String, threadId: String): Observable<Post>{
    return this.http.post<Post>(`${this.url}/${threadId}/posts`, { content }, {withCredentials: true})
  }
  
}
