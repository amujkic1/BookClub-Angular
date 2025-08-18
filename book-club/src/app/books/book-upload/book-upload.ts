import { Component, inject, signal } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.type';
import { BooksService } from '../../services/books';

@Component({
  selector: 'app-book-upload',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './book-upload.html',
  styleUrl: './book-upload.css'
})
export class BookUpload {

  downloadURL: string | null = null;
  private booksService = inject(BooksService)
 
  book: Book = {
  _id: '',
  title: '',
  author: '',
  publisher: '',
  year: null,
  genre: '',
  summary: '',
  coverImageUrl: '',
  pages: null
};


  constructor(private storage: Storage) {}

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const storageRef = ref(this.storage, 'uploads/' + file.name);
    await uploadBytes(storageRef, file);
    this.downloadURL = await getDownloadURL(storageRef);
  }

  onSubmit(){

    if (!this.downloadURL) {
      alert('Molimo, prvo odaberite sliku.');
      return;
  }

    this.booksService.uploadBook(
      this.book.title, 
      this.book.author, 
      this.book.publisher || '', 
      this.book.year || 0, 
      this.book.genre || '', 
      this.book.summary || '', 
      this.book.pages || 0,
      this.downloadURL
    ).subscribe({
      next: (createdBook) => {
        console.log('Book created successfully', createdBook)
        alert('Uspješno ste postavili knjigu')
        this.book = {
          title: '',
          author: '',
          publisher: '',
          year: null,
          genre: '',
          summary: '',
          coverImageUrl: '',
          pages: null
        };
      },
      error: (err) => {
        console.error('Error uploading book:', err);
        alert('Greška pri postavljanju knjige');
      }
    })  

  }
}
