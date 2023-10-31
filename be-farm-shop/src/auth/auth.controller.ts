import * as bcrypt from "bcrypt";
import { Body, Controller, HttpException, HttpStatus, Post, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/users/dto/user.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  @Post("login")
  async login(@Body() info: LoginUserDto) {
    const user = await this.usersService.getOne({ email: info.email });
    if (user) {
      const isMatch = await bcrypt.compare(info.password, user.password);
      if (isMatch) {
        return await this.authService.login(user);
      }
    }
    throw new UnauthorizedException("Email or password not correct!");
  }
}
