import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Auth } from '../../servicios/authService';
import { IPlato } from '../../interfaces/i-plato';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestaurantItem } from '../restaurant-item/restaurant-item';

@Component({
  selector: 'app-restaurant-admin',
  imports: [CommonModule, RestaurantItem, RouterLink],
  templateUrl: './restaurant-admin.html',
  styleUrl: './restaurant-admin.css',
})
export class RestaurantAdmin {

  private platosSubject = new BehaviorSubject<IPlato[]>([]);
  platos$: Observable<IPlato[]> = this.platosSubject.asObservable();

  constructor(private auth: Auth, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const user = this.auth.getUser();
    if (!user || user.role !== 'chef') {
      this.router.navigate(['/login']); // redirige si no es admin
    }else{
      this.cargarPlatos();
    }
  }

  cargarPlatos() {
    this.http.get<IPlato[]>('http://localhost:3000/dishes')
    .subscribe(data => this.platosSubject.next(data));
  }

  eliminar(id: string) {
    this.http.delete(`http://localhost:3000/dishes/${id}`)
      .subscribe(() => this.cargarPlatos());
  }

  toggleEnabled(plato: IPlato) {
    const actualizado = { ...plato, enabled: !plato.enabled };

    this.http.put(`http://localhost:3000/dishes/${plato.id}`, actualizado)
      .subscribe(() => this.cargarPlatos());
  }
}
