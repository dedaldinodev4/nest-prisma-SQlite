import { Controller } from '@nestjs/common';
import { DeleteBookService } from './delete-book.service';

@Controller('delete-book')
export class DeleteBookController {
  constructor(private readonly deleteBookService: DeleteBookService) {}
}
