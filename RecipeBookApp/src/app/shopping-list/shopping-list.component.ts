import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('apples', 5),
    new IngredientModel('bananas', 10)
  ];
  existingIngredient: IngredientModel;

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.existingIngredient = this.ingredients.find(t => t.name === ingredient.name);
    if (this.existingIngredient) {
      console.log('found existing ingredient');
      // this.ingredients.values(name='sdd');
    }
    this.ingredients.push(ingredient);
  }

}
