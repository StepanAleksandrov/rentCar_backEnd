import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<IUser> {
    const newUser = new this.userModel(createUserDTO);
    return await newUser.save();
  }

  async findOne(email: string): Promise<IUser | undefined> {
    return await this.userModel.findOne({ email });
  }
}
