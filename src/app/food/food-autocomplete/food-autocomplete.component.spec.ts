import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAutocompleteComponent } from './food-autocomplete.component';

describe('FoodAutocompleteComponent', () => {
  let component: FoodAutocompleteComponent;
  let fixture: ComponentFixture<FoodAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
