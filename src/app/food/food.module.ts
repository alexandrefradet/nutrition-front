import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodAutocompleteComponent } from './food-autocomplete/food-autocomplete.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FoodHomeComponent } from './food-home/food-home.component';

@NgModule({
  declarations: [FoodAutocompleteComponent, FoodAddComponent, FoodHomeComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [FoodAutocompleteComponent, FoodAddComponent, FoodHomeComponent]
})
export class FoodModule { }
