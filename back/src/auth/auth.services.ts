/*import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { UserDto } from "src/users/users.dto";

@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

    async signIn(userDto: UserDto): Promise<string> {

        // Extraemos las credenciales del objeto UserDto
        const { email, password } = userDto;

        // Verificamos si se proporcionaron ambas credenciales
        if (!email || !password) {
            
            throw new Error('Email y password son requeridos');
        }

        // Verificamos si existe un usuario registrado con el email proporcionado (simulado)
        const userExists = await this.authRepository.checkUserExistsByEmail(email);

        if (!userExists) {
            
            throw new Error('Email  incorrectos');
        }

        // Verificamos si la contraseña proporcionada coincide con la registrada (simulado)
        const passwordMatches = await this.authRepository.checkPasswordMatches(email, password);

        if (!passwordMatches) {
            throw new Error('password incorrectos');
        }

        // Si las credenciales son válidas, retornamos un token de autenticación (simulado)
        return '1234';
    }
}*/
