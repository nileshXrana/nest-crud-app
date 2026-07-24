import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    signUp(@Body() createUserDto: CreateUserDto): object {
        return this.usersService.signUp(createUserDto);
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto): object {
        return this.usersService.login(loginUserDto);
    }
}
