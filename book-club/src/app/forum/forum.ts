import { Component, inject } from '@angular/core';
import { ThreadModal } from "../thread-modal/thread-modal";
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ForumService } from '../services/forum-service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ThreadModal, CommonModule],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum {

  isModalVisible = false
  forumService = inject(ForumService)
  topics: any[] = []
  router = inject(Router)

  ngOnInit(): void {
      this.forumService.getAllThreads()
        .pipe(
          catchError(err => {
            console.error('Greška pri učitavanju tema:', err);
            return of([]); 
          })
        )
        .subscribe((threads: any[]) => {
          this.topics = threads; 
        });
    }

    // sidebar – popularne teme
    popularTopics = [
      'Harry Potter vs. Gospodar prstenova',
      'Najbolji domaći autori',
      'Knjige koje su promijenile život'
    ];

    // sidebar – aktivni članovi
    activeMembers = ['Ajna', 'Marko', 'Emina', 'Tarik'];

    showModal(){
      this.isModalVisible = true
    }

    hideModal(){
      this.isModalVisible = false
    }

    addTopic(topic: any) {
    this.topics = [topic, ...this.topics];
  }

    viewThread(threadId: string){
      this.router.navigate([`/forum/${threadId}`])
    }

}