import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdmin } from './restaurant-admin';

describe('RestaurantAdmin', () => {
  let component: RestaurantAdmin;
  let fixture: ComponentFixture<RestaurantAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
