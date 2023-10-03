import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IFindByBarCodeBookDTO } from './dtos/find-by-bar-code-book.dto';

@Injectable()
export class FindByBarCodeBookService {
  constructor(private prisma: PrismaService) {}
  async findByBarCode(
    bar_code: string,
  ): Promise<IFindByBarCodeBookDTO | Error> {
    const bookExists = await this.prisma.book.findUnique({
      where: { bar_code },
    });

    if (!bookExists) {
      throw new Error('Book does not exists.');
    }

    return bookExists;
  }
}
