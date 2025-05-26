import { Injectable, HttpException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
      console.log('Books fetched successfully');
      console.log(this.books);
    });
  }
  getBook(bookID: number): Promise<any> {
    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === bookID);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }
  addBook(book: CreateBookDto): Promise<any> {
    return new Promise((resolve) => {
      this.books.push(book);
      resolve(this.books);
    });
  }
  deleteBook(bookID: number): Promise<any> {
    return new Promise((resolve) => {
      const index = this.books.findIndex((book) => book.id === bookID);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(index, 1);
      resolve(this.books);
    });
  }
}
