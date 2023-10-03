import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateBookService } from './update-book.service';
import { IUpdateBook } from './dtos/update-book.dto';

@Controller('books')
export class UpdateBookController {
  constructor(private readonly updateBookService: UpdateBookService) {}
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: IUpdateBook) {
    return this.updateBookService.update(id, data);
  }
}
