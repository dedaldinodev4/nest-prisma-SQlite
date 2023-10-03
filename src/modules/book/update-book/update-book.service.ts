import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IUpdateBook } from './dtos/update-book.dto';

@Injectable()
export class UpdateBookService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, data: IUpdateBook): Promise<IUpdateBook | Error> {
    const bookExists = await this.prisma.book.findFirst({
      where: { id },
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }

    const updateBook = await this.prisma.book.update({
      data,
      where: { id },
    });
    return updateBook;
  }
}
