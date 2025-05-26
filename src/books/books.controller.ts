import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
  ) {}


  @Get('second')
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get('second/:bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post('second')
  async addBook(@Body() createBookDTO: CreateBookDto) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  @Delete('second/:id')
  async deleteBook(@Param('id') id: string) {
    const books = await this.booksService.deleteBook(+id);
    return books;
  }
}
