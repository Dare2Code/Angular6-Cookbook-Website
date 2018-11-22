import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    // up on change in ingredientsChange after event emitted, we subscribe to the event
    // and update our ingredients[] with all changes.
    this.slService.ingredientsChange
      .subscribe(
        (ingredients: IngredientModel[]) => {
          this.ingredients = ingredients;
        }
      )
  }
}
