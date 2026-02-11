export interface IUsuario {
    id: string,
    username: string;
    password: string;
    email: string;
    role: 'user' | 'chef';
}
