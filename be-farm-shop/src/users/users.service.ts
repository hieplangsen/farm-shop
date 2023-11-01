import * as bcrypt from "bcrypt";
import { ConflictException, Injectable, UseGuards } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/user.dto";
import { BaseService } from "../core/base.service";
@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {
    super(userModel);
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    if (!createUserDto.email) throw new ConflictException("Not email");
    const exist = await this.getOne({ email: createUserDto.email });

    if (!exist) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(createUserDto.password, salt);
      createUserDto.password = hash;
      createUserDto.avatar = "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-2048x1949-pq9uiebg.png";
      createUserDto.token = 0;
      console.log(createUserDto, "createUserDto");
      const user = await this.create(createUserDto);
      return user;
    }

    throw new ConflictException("Email exist");
  }

  async profile(email: string): Promise<User> {
    const user = await this.getOne({ email });
    if (user && user.password) {
      const cloneUser = JSON.parse(JSON.stringify(user));
      delete cloneUser.password;
      return cloneUser;
    }
    return user;
  }

  async upToken(email: object) {
    const user = await this.userModel.findOneAndUpdate(email, { $inc: { token: 200 } }, { new: true });
    return user;
  }
}
