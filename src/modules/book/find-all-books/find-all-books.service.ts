import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Book } from '../entities/Book';

@Injectable()
export class FindAllBooksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Book[]> {
    const books = await this.prisma.book.findMany({});
    return books;
  }
}
