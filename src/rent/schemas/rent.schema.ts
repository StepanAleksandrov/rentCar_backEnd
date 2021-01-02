import * as mongoose from 'mongoose';

export const RentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // phone: { type: String, required: true },
  startRent: { type: Date, required: true },
  endRent: { type: Date, required: true },
  car: { type: Object, required: true },
  priceRent: { type: String, required: true },
});
