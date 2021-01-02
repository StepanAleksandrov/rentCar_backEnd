import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  // email: { type: String, required: true },
  // gender: { type: String, required: true },
  // address: {
  //   country: { type: String, default: null },
  //   city: { type: String, default: null },
  //   address: { type: String, default: null },
  // },
  // password: { type: String, required: true },
});

// UserSchema.index({ email: 1 }, { unique: true });
