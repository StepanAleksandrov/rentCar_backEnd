import { ICar } from '../../cars/interface/car.interface';

export class CreateRentDTO {
  //   readonly firstName: string;
  //   readonly lastName: string;
  //   readonly phone: string;
  readonly user: String;
  readonly startRent: Date;
  readonly endRent: Date;
  readonly car: ICar;
  readonly priceRent: string;
}
