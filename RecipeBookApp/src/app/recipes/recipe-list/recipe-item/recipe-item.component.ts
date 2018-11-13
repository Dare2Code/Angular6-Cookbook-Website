import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelection () {
    this.selectedRecipe.emit();
  }
}
