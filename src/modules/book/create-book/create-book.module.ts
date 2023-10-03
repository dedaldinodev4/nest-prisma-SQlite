import { Module } from '@nestjs/common';
import { CreateBookService } from './create-book.service';
import { CreateBookController } from './create-book.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CreateBookController],
  providers: [CreateBookService, PrismaService],
})
export class CreateBookModule {}
