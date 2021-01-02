import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  mark: { type: String, required: true },
  _id: { type: String, required: true },
  name: { type: String, required: true },
  specific: { type: String, required: true },
  specification: { type: Array, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  carcass: { type: String, required: true },
  engine_capacity: { type: String, required: true },
  transmission_type: { type: String, required: true },
  fuel_type: { type: String, required: true },
});
