// auth.controller.ts
import { Controller,Get } from '@nestjs/common';
import { AuthService } from './auth.services';
import { get } from 'http';
//import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
 @Get()
  getAuth() {
    return this.authService.getAuth();
  }
 
}
