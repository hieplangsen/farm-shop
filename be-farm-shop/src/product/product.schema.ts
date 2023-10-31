import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, Types } from "mongoose";
import { BaseSchema } from "src/core/base.schema";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product extends BaseSchema {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  price: number;

  @Prop()
  type: string;

  @Prop()
  category: string;

  @Prop()
  total: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
