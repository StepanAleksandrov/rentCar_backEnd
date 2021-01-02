import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get(':city')
  async getCars(@Res() res, @Param() params) {
    const city = params.city;
    const cars = await this.carsService.getCars(city);
    return res.status(HttpStatus.OK).json(cars);
  }

  @Post('/create')
  async addCar(@Res() res, @Body() car: CreateCarDTO) {
    const newCars = await this.carsService.addCar(car);
    return res.status(HttpStatus.OK).json({
      message: 'Car has been submitted successfully!',
      car: newCars,
    });
  }
}
