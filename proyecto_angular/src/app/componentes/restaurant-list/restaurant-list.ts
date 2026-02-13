import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantItem } from '../restaurant-item/restaurant-item';
import { IPlato } from '../../interfaces/i-plato';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  imports: [RouterLink, RestaurantItem],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {

  private platosSubject = new BehaviorSubject<IPlato[]>([]);
  platos$ = this.platosSubject.asObservable();
  
  platos: IPlato[] = [];

  constructor(private http: HttpClient) {
    this.cargarPlatos();

    // Suscribirse para llenar el array normal que usa el HTML con @for
    this.platos$.subscribe(data => {
      this.platos = data;
    });
  }

  

  cargarPlatos() {
    this.http.get<IPlato[]>('http://localhost:3000/dishes')
      .subscribe(data => {
        console.log(data); 
        // solo visibles en el menú
        const visibles = data.filter(p => p.enabled);
        this.platosSubject.next(visibles); // actualiza el BehaviorSubject
      });
  }
  orderPriceLessMore() { // de mayor a menor
  const current = this.platosSubject.getValue();
  this.platosSubject.next([...current].sort((a, b) => a.price - b.price));
}

orderPriceMoreLess() { //de menor a mayor
  const current = this.platosSubject.getValue();
  this.platosSubject.next([...current].sort((a, b) => b.price - a.price));
}
}
