import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FoodsService, FoodDto } from 'src/app/generated';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.sass']
})
export class FoodAddComponent implements OnInit {

  foodForm: FormGroup

  foodTypes = Object.keys(FoodDto.FoodTypeEnum)

  constructor(private fb: FormBuilder, private toastr: ToastrService, private foodsService: FoodsService) { }

  ngOnInit() {
    this.foodForm = this.fb.group({
      'label': ['', Validators.required],
      'protein': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'carbohydrate': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'fat': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'calorie': ['', [Validators.required, Validators.max(1000), Validators.min(0)]],
      'foodType': ['Choisir un type', Validators.required]
    })
  }

  createNewFood() {
    const food: FoodDto = {
      'label': this.foodForm.get('label').value,
      'protein': this.foodForm.get('protein').value,
      'carbohydrate': this.foodForm.get('carbohydrate').value,
      'fat': this.foodForm.get('fat').value,
      'calorie': this.foodForm.get('calorie').value,
      'foodType': this.foodForm.get('foodType').value
    }
    this.foodsService.createFood(food).toPromise()
      .then(() => this.toastr.success('Food crée'))
      .catch(() => this.toastr.error('Echec lors de la création'))
    ;
  }
}
