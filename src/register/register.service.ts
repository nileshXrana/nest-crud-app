import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { randomUUID } from 'crypto';
import { User } from './interface/user.interface';

@Injectable()
export class RegisterService {

    users: User[] = [];

    register(registerUser: RegisterUserDto): object {
        const exists = this.users.find(u => u.email === registerUser.email);
        if (exists) {
            throw new ConflictException("User already registered")
        }
        const newUser: User = {
            id: randomUUID(),
            name: registerUser.name,
            email: registerUser.email,
            password: registerUser.password,
            role: registerUser.role
        };
        this.users.push(newUser);
        return {
            status: "user registered successfully",
            id: newUser.id
        }
    }

}