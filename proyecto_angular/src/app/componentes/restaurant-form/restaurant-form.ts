import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPlato } from '../../interfaces/i-plato';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestaurantItem } from '../restaurant-item/restaurant-item';

@Component({
  selector: 'app-restaurant-form',
  imports: [FormsModule, RestaurantItem],
  templateUrl: './restaurant-form.html',
  styleUrl: './restaurant-form.css',
})
export class RestaurantForm {

  nuevoPlato: IPlato = {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    enabled: true,
    image: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  guardarPlato() {
    const { id, ...platoSinId } = this.nuevoPlato; // elimina id vacío
    this.http.post('http://localhost:3000/dishes', platoSinId)
      .subscribe(() => this.router.navigate(['/admin']));
  }
}
