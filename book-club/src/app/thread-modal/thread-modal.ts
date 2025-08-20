import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForumService } from '../services/forum-service';

@Component({
  selector: 'app-thread-modal',
  imports: [FormsModule],
  templateUrl: './thread-modal.html',
  styleUrl: './thread-modal.css'
})
export class ThreadModal {

  @Output() close = new EventEmitter<void>();
  @Output() newTopic = new EventEmitter<any>();
  topic = ''

  constructor(
    private forumService: ForumService 
  ){}

  createTopic(){
    this.forumService.postThread(this.topic).subscribe({
        next: (res) => {
          console.log("Tema kreirana:", res);
          this.newTopic.emit(res);
          this.closeModal();
        },
        error: (err) => {
          console.error("Greška pri kreiranju teme:", err);
        }
      });
  }

  closeModal(): void {
  	this.close.emit();
  }

}
