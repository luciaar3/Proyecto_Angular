import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantIndex } from './restaurant-index/restaurant-index';
import { RestaurantList } from './restaurant-list/restaurant-list';
import { RestaurantLogin } from './restaurant-login/restaurant-login';
import { RestaurantAdd } from './restaurant-add/restaurant-add';
import { RestaurantEdit } from './restaurant-edit/restaurant-edit';
import { RestaurantItem } from './restaurant-item/restaurant-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RestaurantAdd, RestaurantEdit, RestaurantIndex, RestaurantList, RestaurantLogin, RestaurantItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
