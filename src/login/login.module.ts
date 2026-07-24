import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { RegisterModule } from 'src/register/register.module';

@Module({
    controllers: [LoginController],
    providers: [LoginService],
    imports: [RegisterModule],
})
export class LoginModule { }