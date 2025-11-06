import { Controller, Delete, Param,  } from '@nestjs/common';
import { DeleteBookService } from './delete-book.service';

@Controller('books')
export class DeleteBookController {
  constructor(private readonly deleteBookService: DeleteBookService) {}
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteBookService.delete(id);
  }
}
