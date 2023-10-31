import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { ConfigModule } from "@nestjs/config";
import { AuthController } from "./auth/auth.controller";
import { ProductModule } from "./product/product.module";
import { RateModule } from "./rate/rate.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://hieplangsen:hieplangsen@farm-shop.vurppry.mongodb.net/farm-shop"),
    CoreModule,
    UsersModule,
    AuthModule,
    ProductModule,
    RateModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
