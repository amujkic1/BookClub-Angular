export interface Book {
  _id?: string;
  title: string;
  author: string;
  publisher?: string;
  year?: number | null;
  genre?: string;
  summary?: string;
  coverImageUrl?: string;
  pages?: number | null;
  rating?: number | null;
}
