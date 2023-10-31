import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, ConflictException, Put } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { RateService } from "./rate.service";
import { CreateRateDto } from "./rate.dto";

@Controller("rate")
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    createRateDto.createdAt = new Date();
    const rate = await this.rateService.createRate(createRateDto);
    return rate;
  }

  @Put()
  async updateRate(updateRateDto: CreateRateDto) {
    const rate = await this.rateService.updateRate(updateRateDto._id, updateRateDto.status);
    return rate;
  }

  @Get()
  async getAll() {
    const rates = await this.rateService.getAllRate();
    return rates;
  }

  @Get(":id")
  async getRate(@Param("id") id) {
    const rate = await this.rateService.getOneRate(id);
    return rate;
  }
}
