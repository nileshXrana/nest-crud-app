import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { RegisterService } from 'src/register/register.service';

@Injectable()
export class LoginService {

    constructor(private registerService: RegisterService) { }

    login(loginUser: LoginUserDto): object {
        const user = this.registerService.users.find(u => u.email === loginUser.email);
        if (!user) {
            return {
                status: "user not registered"
            }
        }
        if (user.password !== loginUser.password) {
            return {
                status: "wrong password"
            }
        }
        return {
            status: "user logged in successfully",
            id: user.id,
            name: user.name,
            role: user.role,
            
        };
    }

}
