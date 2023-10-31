import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./product.schema";
import { AuthModule } from "../auth/auth.module";
import { AuthController } from "../auth/auth.controller";
import { AuthService } from "../auth/auth.service";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
