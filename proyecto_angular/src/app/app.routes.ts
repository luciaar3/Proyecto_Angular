import { Routes } from '@angular/router';
import { RestaurantHome } from './componentes/restaurant-home/restaurant-home';
import { RestaurantList } from './componentes/restaurant-list/restaurant-list';
import { RestaurantLogin } from './componentes/restaurant-login/restaurant-login';
import { RestaurantAdmin } from './componentes/restaurant-admin/restaurant-admin';
import { RestaurantForm } from './componentes/restaurant-form/restaurant-form';

export const routes: Routes = [
    ///rutas geenrales
    {path: 'login', component: RestaurantLogin, title: 'Inicio Sesion' },
    {path: 'home', component: RestaurantHome, title: 'Home' },
    {path: 'list', component: RestaurantList, title: 'Menú Restaurante' },
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //rutas para admin
    { path: 'admin', component: RestaurantAdmin},
    { path: 'admin/create', component: RestaurantForm},
    { path: 'admin/edit/:id', component: RestaurantForm },
];
