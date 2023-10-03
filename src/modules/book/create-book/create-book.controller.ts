import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookService } from './create-book.service';
import { ICreateBook } from './dtos/create-book.dto';

@Controller('books')
export class CreateBookController {
  constructor(private readonly createBookService: CreateBookService) {}

  @Post()
  async create(@Body() data: ICreateBook) {
    return this.createBookService.create(data);
  }
}
