
export class CreateUserDto {
  readonly createdAt: Date;
  readonly email: string;
  password: string;
  readonly fullName: string;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
  avatar?: string;
  token: number;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}
