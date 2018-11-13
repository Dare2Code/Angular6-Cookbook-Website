import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Burger',
      'A Simple Test Recipe for a Burger',
      'https://melbournechapter.net/images/burger-clipart-bar-food-9.png')
    , new RecipeModel(
      'Pudding',
      'A Simple Test Recipe for a Pudding',
      'https://melbournechapter.net/images1280_/kawaii-food-clipart-4.gif')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected (selectedRecipe: RecipeModel) {
    this.selectedRecipe.emit(selectedRecipe);
    //console.log('received event: ' + selectedRecipe);
  }

}
