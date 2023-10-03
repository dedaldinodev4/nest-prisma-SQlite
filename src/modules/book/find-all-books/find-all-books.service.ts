import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IFindAllBooksDTO } from './dtos/find-all-books';

@Injectable()
export class FindAllBooksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<IFindAllBooksDTO[]> {
    const books = await this.prisma.book.findMany({});
    return books;
  }
}
