import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRent } from './interface/rent.interface';
import { CreateRentDTO } from './dto/create-rent.dto';

@Injectable()
export class RentService {
  constructor(@InjectModel('Rent') private readonly rentModel: Model<IRent>) {}

  async addRent(rent: CreateRentDTO): Promise<IRent> {
    const intersectRentsAmount = await this.rentModel
      .find({
        'car._id': rent.car._id,
        $or: [
          {
            $and: [
              { startRent: { $gte: rent.startRent } },
              { startRent: { $lte: rent.endRent } },
            ],
          },
          {
            startRent: { $lte: rent.startRent },
            endRent: { $gte: rent.startRent },
          },
        ],
      })
      .count();

    console.log('Count', intersectRentsAmount);
    if (intersectRentsAmount === 0) {
      // create rent rercord
      const newRent = new this.rentModel(rent);

      return await newRent.save();
    }

    // no creation
    return null;
  }
}
