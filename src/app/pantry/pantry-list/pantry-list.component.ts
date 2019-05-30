import { Component, OnInit } from '@angular/core';
import { PantryItemDto, PantryItemsService } from 'src/app/generated';

@Component({
  selector: 'app-pantry-list',
  templateUrl: './pantry-list.component.html',
  styleUrls: ['./pantry-list.component.sass']
})
export class PantryListComponent implements OnInit {

  pantryItems: PantryItemDto[];

  constructor(private pantryService: PantryItemsService) { }

  ngOnInit() {
    this.pantryService.getPantryItems().toPromise()
      .then(items => this.pantryItems = items);
  }

}
