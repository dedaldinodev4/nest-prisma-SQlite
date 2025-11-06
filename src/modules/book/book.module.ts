import { Module } from '@nestjs/common';
import { CreateBookModule } from './create-book/create-book.module';
import { FindAllBooksModule } from './find-all-books/find-all-books.module';
import { FindByIdBookModule } from './find-by-id-book/find-by-id-book.module';
import { UpdateBookModule } from './update-book/update-book.module';
import { FindByBarCodeBookModule } from './find-by-bar-code-book/find-by-bar-code-book.module';
import { DeleteBookModule } from './delete-book/delete-book.module';

@Module({
  imports: [
    CreateBookModule,
    FindAllBooksModule,
    FindByIdBookModule,
    UpdateBookModule,
    FindByBarCodeBookModule,
    DeleteBookModule,
  ],
})
export class BookModule {}
