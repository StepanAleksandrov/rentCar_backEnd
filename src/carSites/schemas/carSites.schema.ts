import * as mongoose from 'mongoose';

export const CarSitesSchema = new mongoose.Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  adress: { type: String, required: true },
});
