import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantryRoutingModule } from './pantry-routing.module';
import { PantryListComponent } from './pantry-list/pantry-list.component';
import { PantryEditComponent } from './pantry-edit/pantry-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { PantryHomeComponent } from './pantry-home/pantry-home.component';

@NgModule({
  declarations: [PantryListComponent, PantryEditComponent, PantryHomeComponent],
  imports: [
    CommonModule,
    PantryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [PantryListComponent, PantryEditComponent, PantryHomeComponent]
})
export class PantryModule { }
