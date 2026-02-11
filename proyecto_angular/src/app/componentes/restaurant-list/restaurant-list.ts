import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  imports: [RouterLink],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {

  orderPriceMoreLess() { // de mayor a menor

  }

  orderPriceLessMore(){ // de menor a mayor

  }
}
