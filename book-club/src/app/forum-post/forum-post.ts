import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForumService } from '../services/forum-service';
import { Post } from '../models/post.type';
import { Thread } from '../models/thread.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './forum-post.html',
  styleUrl: './forum-post.css'
})
export class ForumPost {

  forumService = inject(ForumService)
  private route = inject(ActivatedRoute)
  thread = signal<Thread | null>(null)

  post = {}
  comments = signal<Post[]>([])

  relatedTopics = [
    'Najbolji domaći autori',
    'Knjige koje su promijenile život',
    'Harry Potter vs. Gospodar prstenova'
  ];

  newComment = '';

  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id')) 
    this.forumService.getThreadById(id).subscribe(thread => {
      console.log(thread)
      this.thread.set(thread)
    })
    this.forumService.getCommentsForAThread(id).subscribe(posts => {
      console.log(posts)
      this.comments.set(posts)
    })
  }

  addComment(newComment: string){
    const id = String(this.route.snapshot.paramMap.get('id')) 

    this.forumService.postCommentToThread(newComment, id).subscribe((comment: Post) => {
    // Dodajemo novi komentar na početak liste
    this.comments.set([comment, ...this.comments()]);
    this.newComment = '';
  }, err => {
    console.error('Greška pri dodavanju komentara:', err);
  });
  }

}
