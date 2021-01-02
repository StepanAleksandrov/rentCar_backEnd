import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { RentModule } from './rent/rent.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:password@cluster0-i4vml.mongodb.net/car_rent?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    UserModule,
    CarsModule,
    RentModule,
  ],
})
export class AppModule {}
