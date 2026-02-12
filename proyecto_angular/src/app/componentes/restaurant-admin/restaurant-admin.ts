import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../servicios/authService';

@Component({
  selector: 'app-restaurant-admin',
  imports: [],
  templateUrl: './restaurant-admin.html',
  styleUrl: './restaurant-admin.css',
})
export class RestaurantAdmin {

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    const user = this.auth.getUser();
    if (!user || user.role !== 'chef') {
      this.router.navigate(['/login']); // redirige si no es admin
    }
  }
}
