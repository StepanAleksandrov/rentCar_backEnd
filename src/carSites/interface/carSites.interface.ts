import { Document } from 'mongoose';

export interface ICarSites extends Document {
  readonly country: string;
  readonly city: string;
  readonly street: string;
}
