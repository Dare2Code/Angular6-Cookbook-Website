import {IngredientModel} from '../shared/models/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  // initiating an event to capture any change in the ingredient array
  ingredientsChange = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('apples', 5),
    new IngredientModel('bananas', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient( newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);

    // Emits an event with the change in the ingredient
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
