import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RestaurantList } from './componentes/restaurant-list/restaurant-list';
import { RestaurantLogin } from './componentes/restaurant-login/restaurant-login';
import { RestaurantItem } from './componentes/restaurant-item/restaurant-item';
import { Auth } from './servicios/authService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RestaurantList, RestaurantLogin, RestaurantItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
