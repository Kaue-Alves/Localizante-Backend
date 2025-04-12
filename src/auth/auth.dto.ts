export class RegisterDto {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class LoginDto {
    email: string;
    password: string;
}