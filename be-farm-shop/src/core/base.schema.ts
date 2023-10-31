import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, Types } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";
export type BaseDocument = HydratedDocument<BaseSchema>;

@Schema()
export class BaseSchema {

  @Prop()
  @ApiProperty()
  createdAt: Date;

  @Prop()
  @ApiProperty()
  updatedAt: Date;

  @Prop()
  @ApiProperty()
  deletedAt: Date;
}

export const CatSchema = SchemaFactory.createForClass(BaseSchema);
