import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FoodDto, PantryItemDto, PantryItemsService } from '../../generated';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { FoodService } from '../../food/food.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pantry-edit',
  templateUrl: './pantry-edit.component.html',
  styleUrls: ['./pantry-edit.component.sass']
})
export class PantryEditComponent implements OnInit {

  pantryItemForm: FormGroup;
  foodAutoComplete: Observable<FoodDto[]>;

  constructor(private fb: FormBuilder,
              private foodService: FoodService,
              private pantryService: PantryItemsService,
              private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.buildNewPantryForm();
  }

  savePantryItem() {
    const newItem: PantryItemDto = this.pantryItemForm.value;
    this.pantryService.createPantryItem(newItem).toPromise()
      .then(() => {
        this.toastr.info("New item added to pantry");
        this.buildNewPantryForm();
      })
      .catch(() => this.toastr.error("Fail"));
  }

  private buildNewPantryForm() {
    this.pantryItemForm = this.fb.group({
        'expirationDate': ['', Validators.required],
        'foodDto': ['', Validators.required],
        'share': [''],
        'weight': ['']
      }
    );

    this.foodAutoComplete = this.pantryItemForm.get('foodDto').valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => this.getFoodResults(value))
    );
  }

  private getFoodResults(search: string): Observable<FoodDto[]> {
    return this.foodService.autocomplete(search).pipe(
      map(response => response.content)
    )
  }

  private displayFoodFn(item) {
    return item.label;
  }
}
