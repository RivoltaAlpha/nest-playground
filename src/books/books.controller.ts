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

  @Get('all')
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get('get/:bookID')
  async getBook(@Param('bookID') bookID: string) {
    const book = await this.booksService.getBook(+bookID); // convert to number if needed
    return book;
  }

  @Post('create')
  async addBook(@Body() createBookDTO: CreateBookDto) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }
  @Patch('update/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() createBookDTO: CreateBookDto
  ) {
    const book = await this.booksService.updateBook(+id, createBookDTO);
    return book;
  }

  @Delete('delete/:id')
  async deleteBook(@Param('id') id: string) {
    const books = await this.booksService.deleteBook(+id);
    return books;
  }
}
