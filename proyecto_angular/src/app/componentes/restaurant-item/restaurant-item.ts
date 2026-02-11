import { Component, Input } from '@angular/core';
import { IPlato } from '../../interfaces/i-plato';
import { CurrencyPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'restaurant-item',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './restaurant-item.html',
  styleUrl: './restaurant-item.css',
})
export class RestaurantItem {

  @Input() platos!: IPlato;
}
