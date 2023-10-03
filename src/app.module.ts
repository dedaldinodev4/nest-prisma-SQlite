import { Module } from '@nestjs/common';
import { CreateBookModule } from './modules/book/create-book/create-book.module';
import { FindAllBooksModule } from './modules/book/find-all-books/find-all-books.module';
import { FindByIdBookModule } from './modules/book/find-by-id-book/find-by-id-book.module';
import { UpdateBookModule } from './modules/book/update-book/update-book.module';
import { FindByBarCodeBookModule } from './modules/book/find-by-bar-code-book/find-by-bar-code-book.module';
import { DeleteBookModule } from './modules/book/delete-book/delete-book.module';

@Module({
  imports: [
    CreateBookModule,
    FindAllBooksModule,
    FindByIdBookModule,
    UpdateBookModule,
    FindByBarCodeBookModule,
    DeleteBookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
