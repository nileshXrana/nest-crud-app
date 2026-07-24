import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }


    @Post()
    login(@Body() loginUser: LoginUserDto): object {
        return this.loginService.login(loginUser);
    }

}