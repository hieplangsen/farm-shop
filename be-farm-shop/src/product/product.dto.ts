
export class CreateProductDto {
  createdAt: Date | null;
  readonly name: string;
  imageUrl: string;
  readonly price: number;
  updatedAt: Date | null;
  deletedAt: Date | null;
  type: string;
  category: string;
  total: number;
}
