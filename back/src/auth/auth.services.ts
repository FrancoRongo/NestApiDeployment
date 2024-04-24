// auth.service.ts
import { Injectable } from '@nestjs/common';
//import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  getAuth(){
    return 'Get Auth'
  }
}
