import { Component, OnInit } from '@angular/core';
import { FoodDto, FoodsService } from 'src/app/generated';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.sass']
})
export class FoodListComponent implements OnInit {

  foods: FoodDto[]

  constructor(private foodsService:FoodsService) { }

  ngOnInit() {
    console.log("triggered")
    this.foodsService.getAllFoods().toPromise().then(foodList => {
      console.log("finished")
      this.foods = foodList
    })
  }

}
