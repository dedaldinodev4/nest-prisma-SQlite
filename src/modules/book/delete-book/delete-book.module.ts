import { Module } from '@nestjs/common';
import { DeleteBookService } from './delete-book.service';
import { DeleteBookController } from './delete-book.controller';

@Module({
  controllers: [DeleteBookController],
  providers: [DeleteBookService],
})
export class DeleteBookModule {}
