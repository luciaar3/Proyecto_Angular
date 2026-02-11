import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../../servicios/authService';
import { IUsuario } from '../../interfaces/i-usuario';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'restaurant-login',
  imports: [ FormsModule],
  templateUrl: './restaurant-login.html',
  styleUrl: './restaurant-login.css',
})
export class RestaurantLogin {

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: Auth
  ) {}

  username: string = '';
  password: string = '';
  errorMessage: string = '';

 login() {
    this.http.get<IUsuario[]>(
      `http://localhost:3000/users?username=${this.username}&password=${this.password}`
    ).subscribe(users => {
      if (users.length === 1) {
        const user = users[0];
        this.auth.login(user);

        if (user.role === 'chef') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/menu']);
        }
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
