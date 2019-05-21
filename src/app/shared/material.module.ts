import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule {
}
