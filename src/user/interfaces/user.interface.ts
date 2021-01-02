import { Document } from 'mongoose';
// import { IAddress } from './address.interface';

export interface IUser extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: number;
  // readonly email: string;
  // readonly gender: string;
  // readonly address: IAddress;
  // readonly password: string;
}
