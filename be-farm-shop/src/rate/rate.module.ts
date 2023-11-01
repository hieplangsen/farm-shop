import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RateController } from "./rate.controller";
import { RateService } from "./rate.service";
import { Rate, RateSchema } from "./rate.schema";
import { UsersService } from "../users/users.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Rate.name, schema: RateSchema }])], 
  controllers: [RateController],
  providers: [RateService],
  exports: [RateService],
})
export class RateModule {}