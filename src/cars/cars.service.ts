import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICar } from './interface/car.interface';
import { CreateCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

  async getCars(city: string): Promise<ICar[]> {
    const cars = await this.carModel.find({ location: city }).exec();
    return cars;
  }

  async addCar(car: CreateCarDTO): Promise<ICar> {
    const newCar = new this.carModel(car);
    return await newCar.save();
  }
}
