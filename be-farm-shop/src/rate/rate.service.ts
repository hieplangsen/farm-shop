import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Rate } from "./rate.schema";

import { BaseService } from "../core/base.service";
import { CreateRateDto } from "./rate.dto";
@Injectable()
export class RateService extends BaseService<Rate> {
  constructor(
    @InjectModel(Rate.name)
    private readonly rateModel: Model<Rate>
  ) {
    super(rateModel);
  }

  async createRate(createRateDto: CreateRateDto): Promise<Rate> {
    const rate = await this.create(createRateDto);
    return rate;
  }

  async updateRate(id: string, status: string): Promise<Rate> {
    const rate = await this.update(id, { status });
    return rate;
  }

  async getAllRate(): Promise<Rate[]> {
    const Rates = await this.getAll();
    return Rates;
  }

  async getOneRate(id: string): Promise<Rate> {
    const rate = await this.getById(id);
    return rate;
  }
}
