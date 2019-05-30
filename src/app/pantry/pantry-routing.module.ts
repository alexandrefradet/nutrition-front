import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantryHomeComponent } from './pantry-home/pantry-home.component';

const routes: Routes = [
  {path: '', component: PantryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantryRoutingModule { }
