import { Routes } from '@angular/router';
import { RestaurantIndex } from './restaurant-index/restaurant-index';
import { RestaurantList } from './restaurant-list/restaurant-list';
import { RestaurantLogin } from './restaurant-login/restaurant-login';
import { RestaurantAdd } from './restaurant-add/restaurant-add';
import { RestaurantEdit } from './restaurant-edit/restaurant-edit';

export const routes: Routes = [
    {path: 'login', component: RestaurantLogin, title: 'Inicio Sesion' },
    {path: 'indice', component: RestaurantIndex, title: 'Indice' },
    {path: 'list', component: RestaurantList, title: 'Lita Restaurante' },
    {path: 'dish/add', component: RestaurantAdd, title: 'Añadir Plato' },
    {path: 'dish/edit', component: RestaurantEdit, title: 'Editar Plato' },
    { path: '', redirectTo: 'indice', pathMatch: 'full' },
];
