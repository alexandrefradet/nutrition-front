import { Component, OnInit } from '@angular/core';
import { FoodDto, FoodsService } from 'src/app/generated';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.sass']
})
export class FoodListComponent implements OnInit {

  foods: FoodDto[];
  foodAutoComplete: Observable<FoodDto[]>;
  foodAutocompleteControl = new FormControl();

  constructor(private fb:FormBuilder, private foodService: FoodService) { }

  ngOnInit() {
    this.foodAutoComplete = this.foodAutocompleteControl.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => this.getResults(value))
    );
  }

  private getResults(search: string): Observable<FoodDto[]> {
    return this.foodService.autocomplete(search).pipe(
      map(response => response.content)
    )
  }

}
