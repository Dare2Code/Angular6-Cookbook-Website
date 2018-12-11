import {IngredientModel} from '../shared/models/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  // initiating an event to capture any change in the ingredient array
  ingredientsChange = new Subject<IngredientModel[]>();
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
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: IngredientModel[]) {
    this.ingredients.push(...newIngredients);
    // Emit an event with the updated ingredient.
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
