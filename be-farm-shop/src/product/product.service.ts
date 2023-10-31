import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.schema";

import { BaseService } from "../core/base.service";
import { CreateProductDto } from "./product.dto";
@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>
  ) {
    super(productModel);
  }

  async createProduct(createUserDto: CreateProductDto): Promise<Product> {
    const product = await this.create(createUserDto);
    return product;
  }

  async getAllProduct(): Promise<Product[]> {
    const products = await this.getAll();
    return products;
  }

  async getOneProduct(id: string): Promise<Product> {
    const product = await this.getById(id);
    return product;
  }

}
