import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FoodDto, FoodsService } from 'src/app/generated';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.sass']
})
export class FoodAddComponent implements OnInit {

  foodForm: FormGroup;

  foodTypes = Object.keys(FoodDto.FoodTypeEnum);

  constructor(private fb: FormBuilder, private toastr: ToastrService, private foodsService: FoodsService) { }

  ngOnInit() {
    this.foodForm = this.buildFoorForm();
  }

  createNewFood() {
    const food: FoodDto = this.foodForm.value;
    this.foodsService.createFood(food).toPromise()
      .then(() => {
        this.toastr.success('Food crée');
        this.foodForm = this.buildFoorForm();
      })
      .catch(() => this.toastr.error('Echec lors de la création'))
    ;
  }

  private buildFoorForm() {
    return this.fb.group({
      'label': ['', Validators.required],
      'protein': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'carbohydrate': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'fat': ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      'calorie': ['', [Validators.required, Validators.max(1000), Validators.min(0)]],
      'foodType': ['', Validators.required]
    })
  }
}
