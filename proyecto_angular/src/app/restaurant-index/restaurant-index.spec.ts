import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantIndex } from './restaurant-index';

describe('RestaurantIndex', () => {
  let component: RestaurantIndex;
  let fixture: ComponentFixture<RestaurantIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
