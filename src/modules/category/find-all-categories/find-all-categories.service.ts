import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Category } from '../entities/Category';

@Injectable()
export class FindAllCategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany({});
    return categories;
  }
}
