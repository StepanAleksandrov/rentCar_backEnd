import { Module } from '@nestjs/common';
import { RentController } from './rent.controller';
import { RentService } from './rent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RentSchema } from './schemas/rent.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rent', schema: RentSchema }]),
    UserModule,
  ],
  controllers: [RentController],
  providers: [RentService],
})
export class RentModule {}
