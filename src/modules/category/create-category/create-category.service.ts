import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ICreateCategory } from './dtos/create-category.dto';
import { Category } from '../entities/Category';

@Injectable()
export class CreateCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateCategory): Promise<Category | Error> {
    const categoryExists = await this.prisma.category.findUnique({
      where: { name: data.name },
    });

    if (categoryExists) {
      throw new Error('Category already exists.');
    }

    const book = await this.prisma.category.create({
      data,
    });

    return book;
  }
}
