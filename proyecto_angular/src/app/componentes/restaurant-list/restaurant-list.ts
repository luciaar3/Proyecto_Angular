import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantItem } from '../restaurant-item/restaurant-item';
import { IPlato } from '../../interfaces/i-plato';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-restaurant-list',
  imports: [RouterLink, RestaurantItem, AsyncPipe, NgClass],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  
    platos$!: Observable<IPlato[]>;  // Observable de platos
    categoriaSeleccionada: string = ''; // para el filtro por categoría


  constructor(private http: HttpClient) {
    this.cargarPlatos();
  }

  cargarPlatos() {
    this.platos$ = this.http.get<IPlato[]>('http://localhost:3000/dishes')
      .pipe(
        map(platos => platos.filter(p => p.enabled)) // solo visibles
      );
  }
  orderPriceLessMore() { // de menor a mayor
  this.platos$ = this.platos$.pipe(
      map(platos => [...platos].sort((a, b) => a.price - b.price))
    );

}

orderPriceMoreLess() { //de mayor a mneor
  this.platos$ = this.platos$.pipe(
      map(platos => [...platos].sort((a, b) => b.price - a.price))
    );
}

filtrarPorCategoria(categoria: string) {
  this.categoriaSeleccionada = categoria;
    this.platos$ = this.http.get<IPlato[]>('http://localhost:3000/dishes')
      .pipe(
        map(platos =>
          platos.filter(p => 
            p.enabled && 
            (categoria === 'todas' || p.category === categoria)
          )
        )
      );

}

  // --- VARIABLES DE USABILIDAD ---
  nivelTexto: number = 0; // 0:Normal,1: Grande,2: Muy Grande
  
  alturaLineas = false;
  contraste = false;
  gris = false;
  enlaces = false;
  enfoque = false;
  
  // Recibe el nivel
  cambiarTamanoTexto(nivel: number) {
    this.nivelTexto = nivel;
  }

  activarAlturaLineas() { this.alturaLineas = !this.alturaLineas; }
  activarAltoContraste() { this.contraste = !this.contraste; }
  activarEscalaGrises() { this.gris = !this.gris; }
  resaltarEnlaces() { this.enlaces = !this.enlaces; }
  enfoqueContorno() { this.enfoque = !this.enfoque; }

  resetUsabilidad() {
    this.nivelTexto = 0; // Vuelve a normal
    this.alturaLineas = false;
    this.contraste = false;
    this.gris = false;
    this.enlaces = false;
    this.enfoque = false;
  }
}
