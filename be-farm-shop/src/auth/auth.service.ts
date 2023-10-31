import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "src/users/dto/user.dto";
import { User } from "src/users/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(info: User): Promise<object> {
    const cloneInfo = JSON.parse(JSON.stringify(info));
    delete cloneInfo.password;
    return { accessToken: await this.jwtService.signAsync(cloneInfo) };
  }
}
