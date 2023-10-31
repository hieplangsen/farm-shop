import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { PaginationParams, PaginationResponse } from "./interface";

@Injectable()
export class BaseService<T> {
	constructor(private readonly model: Model<T>) {}

	async create(entity: T): Promise<T> {
		const createdEntity = new this.model(entity);
		const savedEntity = await createdEntity.save();
		return savedEntity.toObject() as T;
	}

	async getAll(): Promise<T[]> {
		return await this.model.find();
	}

	async getOne(info: object): Promise<T | null> {
		return await this.model.findOne(info);
	}

	async getById(id: string): Promise<T | null> {
		return await this.model.findById(id);
	}

	async delete(id: string): Promise<boolean> {
		const result = await this.model.deleteOne({ _id: id });
		return result.deletedCount === 1;
	}

	async update(id: string, updates: Partial<T>): Promise<T | null> {
		return await this.model.findByIdAndUpdate(id, updates, { new: true });
	}
}
// findByIdAndUpdate

//findOneAndUpdate

// paging

// import { Injectable } from "@nestjs/common";
// import { DeepPartial, FindManyOptions, FindOneOptions, FindOperator, FindOptionsWhere, ILike, Repository } from "typeorm";
// import { BaseEntity } from "./entities/base.entity";
// import { PaginationParams, PaginationResponse } from "./interfaces";

// @Injectable()
// export class BaseService<T> {
//   constructor(private readonly genericRepository: Repository<T>) {}

//   create(entity: DeepPartial<T>): Promise<T> {
//     return this.genericRepository.save(entity);
//   }

//   getAll(): Promise<T[]> {
//     return this.genericRepository.find();
//   }

//   async getAllPaging(
//     options: PaginationParams,
//     searchFields: string[],
//     conditionalFields: Record<string, string | number | Record<string, string | number | FindOperator<string>>> = null,
//     relations: string[] = []
//   ): Promise<PaginationResponse<T>> {
//     const size = options.size || 10;
//     const page = options.page || 0;
//     const search = (options.search || "").trim();
//     const order = options.order || "createdAt";
//     const direction = options.direction || "DESC";
//     let filter = [];
//     for (const field of searchFields) {
//       const fields = field.split(".");
//       let i = fields.length - 1;
//       let query: any = { [fields[i]]: ILike(`%${search}%`) };
//       while (i > 0) {
//         i--;
//         query = { [fields[i]]: query };
//       }
//       if (conditionalFields) {
//         filter.push({ ...query, ...conditionalFields });
//       } else {
//         filter.push({ ...query });
//       }
//     }
//     if (!filter.length && conditionalFields) {
//       filter = [conditionalFields];
//     }

//     if (filter.length) {
//       const [items, total] = await this.genericRepository.findAndCount({
//         where: filter,
//         relations,
//         order: {
//           [order]: direction,
//         },
//         take: size,
//         skip: page * size,
//       } as FindManyOptions<T>);

//       return {
//         totalItems: total,
//         totalPages: Math.ceil(total / size),
//         currentPage: page,
//         items,
//         limit: size,
//       };
//     }
//     if (!filter.length && conditionalFields) {
//       filter = [conditionalFields];
//     }

//     const [items, total] = await this.genericRepository.findAndCount({
//       relations,
//       order: {
//         [order]: direction,
//       },
//       take: size,
//       skip: page * size,
//     } as FindManyOptions<T>);

//     return {
//       totalItems: total,
//       totalPages: Math.ceil(total / size),
//       currentPage: page,
//       items,
//       limit: size,
//     };
//   }

//   get(id: string | number, options?: FindOneOptions<T>): Promise<T> {
//     return this.genericRepository.findOne({ where: { id } as any, ...options });
//   }

//   findByPublicId(publicId: string, relations?: string[]): Promise<T> {
//     if (relations) {
//       return this.genericRepository.findOne({ where: { publicId } as any, relations });
//     }
//     return this.genericRepository.findOne({ where: { publicId } as any });
//   }

//   findOne(options: FindOneOptions<T>): Promise<T> {
//     return this.genericRepository.findOne(options);
//   }

//   find(options: FindManyOptions<T>): Promise<T[]> {
//     return this.genericRepository.find(options);
//   }

//   async delete(id: string): Promise<boolean> {
//     const result = await this.genericRepository.softDelete(id);
//     return !!result.affected;
//   }

//   restore(options: FindOptionsWhere<T>) {
//     return this.genericRepository.restore(options);
//   }

//   update(entity: DeepPartial<T>): Promise<T> {
//     return this.genericRepository.save(entity);
//   }
// }
