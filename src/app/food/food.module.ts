import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [FoodListComponent],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  exports: [FoodListComponent]
})
export class FoodModule { }
