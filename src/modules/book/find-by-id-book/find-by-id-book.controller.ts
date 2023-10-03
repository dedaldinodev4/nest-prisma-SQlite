import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdBookService } from './find-by-id-book.service';

@Controller('books')
export class FindByIdBookController {
  constructor(private readonly findByIdBookService: FindByIdBookService) {}

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return this.findByIdBookService.findOneById(id);
  }
}
