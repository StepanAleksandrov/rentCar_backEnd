import { Document } from 'mongoose';
import { ICar } from '../../cars/interface/car.interface';

export interface IRent extends Document {
  // readonly user: String;
  readonly user: string;
  readonly startRent: Date;
  readonly endRent: Date;
  readonly car: ICar;
  readonly priceRent: string;
}
