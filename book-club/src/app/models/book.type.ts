export interface Book {
  bookId: number;
  title: string;
  author: string;
  coverImageUrl?: string;
  genre?: string;
  publisher?: string;
  year?: number;
  pages?: number;
  rating?: number;
  description?: string;
}
