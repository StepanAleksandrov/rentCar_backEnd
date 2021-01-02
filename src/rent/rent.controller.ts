import { UserService } from 'src/user/user.service';
import { Controller, Post, HttpStatus, Body, Res } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentDTO } from './dto/rent.dto';

@Controller('rent')
export class RentController {
  constructor(
    private rentService: RentService,
    private userService: UserService,
  ) {}

  @Post('/create')
  async addRent(@Res() res, @Body() rent: RentDTO) {
    try {
      const newUser = await this.userService.addUser({
        firstName: rent.firstName,
        lastName: rent.lastName,
        phone: rent.phone,
      });
      const newRent = await this.rentService.addRent({
        user: newUser._id,
        startRent: rent.startRent,
        endRent: rent.endRent,
        car: rent.car,
        priceRent: rent.priceRent,
      });

      if (newRent) {
        return res.status(HttpStatus.OK).json({
          rent: {
            id: newRent._id,
          },
          creation: 'creation',
        });
      }
      return res.status(HttpStatus.OK).json({
        creation: 'no creation',
      });
    } catch (error) {
      return error;
    }
  }
}
