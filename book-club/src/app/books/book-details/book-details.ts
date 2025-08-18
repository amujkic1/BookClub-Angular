import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books';
import { Book } from '../../models/book.type';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {
  private route = inject(ActivatedRoute)
  private booksService = inject(BooksService)

  book = signal<Book | null>(null);

  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'))

    if (id) {
      this.booksService.getBookById(id).subscribe(book => {
        console.log('book ', book)
        this.book.set(book);
      });
    }
  }

}
