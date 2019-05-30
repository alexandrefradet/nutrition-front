import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryEditComponent } from './pantry-edit.component';

describe('PantryEditComponent', () => {
  let component: PantryEditComponent;
  let fixture: ComponentFixture<PantryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
