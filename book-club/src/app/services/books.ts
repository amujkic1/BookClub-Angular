import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../models/book.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly url = 'http://localhost:3000/books'
  private readonly postUrl = 'http://localhost:3000/book'
  private http = inject(HttpClient)

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`)
  }

  uploadBook(title: string, author:string, publisher:string, year:number, genre:string, summary:string, pages:number, coverImageUrl: string): Observable<Book>{
    const bookData: Book = {
    title,
    author,
    publisher,
    year,
    genre,
    summary,
    pages,
    coverImageUrl
  };
  return this.http.post<Book>(this.postUrl, bookData);
  }
  
}
