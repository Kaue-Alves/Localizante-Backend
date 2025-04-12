import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  private readonly users: RegisterDto[] = [];

  createUser(newUser: RegisterDto) {
    this.users.push(newUser);
      console.log('criado com sucesso');
      console.log(newUser);
      
  }

  loginUser(user: LoginDto) {
    if (!user || !user.email) {
      throw new HttpException(
        'Dados inválidos: email é obrigatório',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userFounded = this.users.filter((u) => u.email === user.email);

    if (!userFounded.length) {
      throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST);
    }

    console.log('Usuário encontrado com sucesso:', userFounded);
    return userFounded[0]; // Retorna o usuário encontrado
  }
}
