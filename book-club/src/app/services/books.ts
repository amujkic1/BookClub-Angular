import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../models/book.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly url = 'http://localhost:3000/books'
  private http = inject(HttpClient)

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`)
  }
  
}
