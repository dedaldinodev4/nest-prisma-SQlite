import { Controller, Get, Param } from '@nestjs/common';
import { FindByBarCodeBookService } from './find-by-bar-code-book.service';

@Controller('books/byBarCode')
export class FindByBarCodeBookController {
  constructor(
    private readonly findByBarCodeBookService: FindByBarCodeBookService,
  ) {}
  @Get(':bar_code')
  async findByBarCode(@Param('bar_code') bar_code: string) {
    return this.findByBarCodeBookService.findByBarCode(bar_code);
  }
}
