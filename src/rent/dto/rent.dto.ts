import { ICar } from '../../cars/interface/car.interface';

export class RentDTO {
  // readonly user: String;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly startRent: Date;
  readonly endRent: Date;
  readonly car: ICar;
  readonly priceRent: string;
}
