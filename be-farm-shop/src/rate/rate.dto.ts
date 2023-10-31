import { ObjectId } from "mongoose";

export class CreateRateDto {
  _id: string;
  createdAt: Date | null;
  text: string;
  file: string;
  user: string;
  idProduct: string;
  status: string;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
