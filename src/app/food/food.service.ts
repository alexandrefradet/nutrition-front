import { Injectable } from '@angular/core';
import { FoodsService } from '../generated';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends FoodsService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, null, null);
  }

  autocomplete(search: string) {
    return this.getAllFoods(10, 0, search);
  }
}
