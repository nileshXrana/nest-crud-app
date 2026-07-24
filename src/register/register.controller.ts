import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/register.dto';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    register(@Body() registerUser: RegisterUserDto): object {
        return this.registerService.register(registerUser);
    }
}