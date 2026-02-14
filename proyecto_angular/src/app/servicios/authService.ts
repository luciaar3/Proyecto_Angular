import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/i-usuario';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private currentUser: IUsuario | null = null;

  login(user: IUsuario) {
    this.currentUser = user;
  }

  getUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
