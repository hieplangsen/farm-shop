import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, ConflictException } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { AuthService } from "./../auth/auth.service";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    createProductDto.createdAt = new Date();
    const product = await this.productService.createProduct(createProductDto);
    return product;
  }

  @Get()
  async getAll() {
    const products = await this.productService.getAllProduct();
    return products;
  }

  @Get(":id")
  async getProduct(@Param("id") id) {
    const products = await this.productService.getOneProduct(id);
    return products;
  }
}
