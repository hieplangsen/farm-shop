import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, Types } from "mongoose";
import { BaseSchema } from "src/core/base.schema";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends BaseSchema {
	@Prop()
		fullName: string;

	@Prop()
		email: string;

	@Prop()
		password?: string;

	@Prop()
		avatar?: string;
		
	@Prop()
	token?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
