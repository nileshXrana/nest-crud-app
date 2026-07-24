import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
    users: User[] = [];

    signUp(signupUser: CreateUserDto): object {
        const exists = this.users.find(u => u.email === signupUser.email);
        if (exists) {
            throw new ConflictException("User already exists")
            // return {
            //     status: 
            // }
        }
        const newUser: User = {
            id: randomUUID(),
            name: signupUser.name,
            email: signupUser.email,
            password: signupUser.password,
        };
        this.users.push(newUser);
        return {
            status: "user added successfully",
            uid: newUser.id
        }
    }

    login(loginUser: LoginUserDto): object {
        const user = this.users.find(u => u.email === loginUser.email);
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
            uid: user.id
        };
    }

}
