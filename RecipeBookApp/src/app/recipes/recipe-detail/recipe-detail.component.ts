import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
  }

  // add the selected recipe's ingredients to shopping list
  addIngredientsToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
