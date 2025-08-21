import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BooksComponent } from './books/books/books';
import { Forum } from './forum/forum';
import { BookDetails } from './books/book-details/book-details';
import { BookUpload } from './books/book-upload/book-upload';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForumPost } from './forum-post/forum-post';

export const routes: Routes = [
    { path: '', component: Login },       
    { path: 'home', component: Home},
    { path: 'books', component: BooksComponent },
    { path: 'forum', component: Forum},
    { path: 'details', component: BookDetails},
    { path: 'upload', component: BookUpload},
    { path: 'register', component: Register},
    { path: 'books/:id', component: BookDetails },
    { path: 'forum/:id', component: ForumPost }
];
