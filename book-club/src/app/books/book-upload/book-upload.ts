import { Component } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-upload',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-upload.html',
  styleUrl: './book-upload.css'
})
export class BookUpload {

  downloadURL: string | null = null;

  constructor(private storage: Storage) {}

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const storageRef = ref(this.storage, 'uploads/' + file.name);
    await uploadBytes(storageRef, file);
    this.downloadURL = await getDownloadURL(storageRef);
  }
}
