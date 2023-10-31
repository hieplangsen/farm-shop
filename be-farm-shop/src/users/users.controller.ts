import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, ConflictException } from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "./dto/user.dto";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/auth/auth.guard";
import { AuthService } from "./../auth/auth.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		const infoUser = await this.usersService.register(createUserDto);
		const token = this.authService.login(infoUser);
		return token;
	}

	@UseGuards(AuthGuard)
	@Get("profile")
	getProfile(@Request() req) {
		const user = this.usersService.profile(req.user.email);
		return user;
	}
}
