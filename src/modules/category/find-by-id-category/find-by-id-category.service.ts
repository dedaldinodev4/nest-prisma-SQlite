import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Category } from '../entities/Category';

@Injectable()
export class FindByIdCategoryService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<Category | Error> {
    const categoryExists = await this.prisma.category.findFirst({
      where: { id },
    });

    if (!categoryExists) {
      throw new Error('Category does not exists.');
    }
    return categoryExists;
  }
}
