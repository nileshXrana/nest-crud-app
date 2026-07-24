import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
    users: User[] = [];

    signUp(user: CreateUserDto): object {
        const exists = this.users.find(u => u.email === user.email);
        if (exists) {
            return {
                status: "User already exists"
            }
        }
        const newUser: User = {
            id: randomUUID(),
            name: user.name,
            email: user.email,
            password: user.password,
        };
        this.users.push(newUser);
        return {
            status: "user added successfully",
            uid: newUser.id
        }
    }

    login(loginUserDto: LoginUserDto): object {
        const user = this.users.find(u => u.email === loginUserDto.email);
        if (!user) {
            return {
                status: "user not registered"
            }
        }
        if (user.password !== loginUserDto.password) {
            return {
                status: "wrong password"
            }
        }
        return {
            status: "user logged in successfully",
            uid: user.id
        };
    }

}
