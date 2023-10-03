import { Controller, Get } from '@nestjs/common';
import { FindAllBooksService } from './find-all-books.service';

@Controller('books')
export class FindAllBooksController {
  constructor(private readonly findAllBooksService: FindAllBooksService) {}

  @Get()
  async findAll() {
    return this.findAllBooksService.findAll();
  }
}
