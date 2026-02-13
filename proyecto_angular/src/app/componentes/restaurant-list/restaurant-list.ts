import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantItem } from '../restaurant-item/restaurant-item';
import { IPlato } from '../../interfaces/i-plato';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  imports: [RouterLink, RestaurantItem],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {

  platos: IPlato[] = [];

  constructor(private http: HttpClient) {
    this.cargarPlatos();
  }

  cargarPlatos() {
    this.http.get<IPlato[]>('http://localhost:3000/dishes')
      .subscribe(data => {
        console.log(data); 
        // solo visibles en el menú
        this.platos = data.filter(p => p.enabled);
      });
  }
  orderPriceLessMore() { // de mayor a menor
  this.platos = [...this.platos].sort((a, b) => a.price - b.price);
}

orderPriceMoreLess() { //de menor a mayor
  this.platos = [...this.platos].sort((a, b) => b.price - a.price);
}
}
