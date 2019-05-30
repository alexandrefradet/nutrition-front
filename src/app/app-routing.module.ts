import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "pantry", loadChildren: () => import('./pantry/pantry.module').then(mod => mod.PantryModule)},
  {path: "food", loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
