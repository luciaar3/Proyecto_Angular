import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RestaurantList } from './componentes/restaurant-list/restaurant-list';
import { RestaurantLogin } from './componentes/restaurant-login/restaurant-login';
import { RestaurantItem } from './componentes/restaurant-item/restaurant-item';
import { FormsModule } from '@angular/forms';
import { Auth } from './servicios/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RestaurantList, RestaurantLogin, RestaurantItem, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private auth: Auth, private router: Router) {}
  logout(){
      this.auth.logout();
      this.router.navigate(['/home']);
  }
}
