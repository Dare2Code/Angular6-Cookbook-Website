import {EventEmitter} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/models/ingredient.model';
import index from '@angular/cli/lib/cli';


export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Burger',
      [
        new IngredientModel('Meat',1),
        new IngredientModel('Buns',2)
      ],
      'A Simple Test Recipe for a Burger',
      'https://melbournechapter.net/images/burger-clipart-bar-food-9.png')
    , new RecipeModel(
      'Pudding',
      [
        new IngredientModel('Eggs',2),
        new IngredientModel('Sugar',1)
      ],
      'A Simple Test Recipe for a Pudding',
      'https://melbournechapter.net/images1280_/kawaii-food-clipart-4.gif')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(recipeID: number) {
    // returning a single recipe with recipeID as INDEX of the object array.
    return this.recipes[recipeID];
  }
}
