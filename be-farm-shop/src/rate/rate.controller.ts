import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, ConflictException, Put, Query } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { RateService } from "./rate.service";
import { CreateRateDto } from "./rate.dto";
// import { UsersService } from "../users/users.service";

@Controller("rate")
export class RateController {
  constructor(
    private readonly rateService: RateService,
    // private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    createRateDto.createdAt = new Date();
    const rate = await this.rateService.createRate(createRateDto);
    return rate;
  }

  @Put()
  async updateRate(@Body() createRateDto: CreateRateDto) {
    const rate = await this.rateService.updateRate(createRateDto._id, createRateDto.status);
    // if (createRateDto.status === "accept") {
    //  await this.usersService.upToken(createRateDto.user);
    // }
    return rate;
  }

  @Get()
  async get(@Query() queryParams) {
    const rates = await this.rateService.getRate(queryParams);
    return rates;
  }

  @Get(":id")
  async getRate(@Param("id") id) {
    const rate = await this.rateService.getOneRate(id);
    return rate;
  }
}
