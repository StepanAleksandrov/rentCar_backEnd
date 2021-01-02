import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly _id: string;
  readonly name: string;
  readonly specific: string;
  readonly specification: [];
  readonly location: string;
  readonly imageUrl: string;
  readonly carcass: string;
  readonly engine_capacity: string;
  readonly transmission_type: string;
  readonly fuel_type: string;
}
