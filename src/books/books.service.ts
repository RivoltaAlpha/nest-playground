import { Injectable, HttpException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BOOKS } from '../mocks/books.mock';
import { IBook } from './entities/book.entity';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
      console.log('Books fetched successfully');
      // console.log(this.books);
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

  addBook(book: IBook) {
    const lastId = this.books[this.books.length - 1].id;
    const newBook = {
      id: lastId + 1,
      title: book.title,
      description: book.description,
      author: book.author,
    };
    this.books.push(newBook);
    console.log('This action adds a new book');
    return newBook;
  }

  updateBook(id: number, book: IBook) {
    const index = this.books.findIndex((p) => p.id === id);
    if (index !== -1) {
      const updatedbook = {
        id,
        title: book.title,
        description: book.description,
        author: book.author,
      };
      this.books[index] = updatedbook;
      console.log(`This action updates a #${id} book`);
      return updatedbook;
    } else {
      return `book with id ${id} not found`;
    }
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
