import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../services/books';
import { Book } from '../../models/book.type';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class BooksComponent {

    booksService = inject(BooksService)
    books = signal<Array<Book>>([])
    router = inject(Router)

    ngOnInit(): void {
      this.booksService.getAllBooks()
      .pipe(
        catchError(err=>{
          console.log(err)
          throw err
        })
      )
      .subscribe((books) => {
        console.log('books', books)
        this.books.set(books)
      })
    }

    viewDetails(bookId: string): void {
      this.booksService.getBookById(bookId)
      .subscribe(book => {
        this.router.navigate(['/books', bookId]);
      })
    }
  
}