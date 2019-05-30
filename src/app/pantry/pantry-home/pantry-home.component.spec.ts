import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryHomeComponent } from './pantry-home.component';

describe('PantryHomeComponent', () => {
  let component: PantryHomeComponent;
  let fixture: ComponentFixture<PantryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
