import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, Types } from "mongoose";
import { BaseSchema } from "src/core/base.schema";

export type RateDocument = HydratedDocument<Rate>;

@Schema()
export class Rate extends BaseSchema {
  @Prop()
  text: string;

  @Prop()
  file: string;

  @Prop()
  user: string;

  @Prop()
  idProduct: string;

  @Prop()
  status: string;
}

export const RateSchema = SchemaFactory.createForClass(Rate);
