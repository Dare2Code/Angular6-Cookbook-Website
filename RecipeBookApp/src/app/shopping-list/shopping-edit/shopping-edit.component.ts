import {Component, ElementRef,  OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/models/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientQty') ingredientQty: ElementRef;

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddBtnClick() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingQty = this.ingredientQty.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingQty);
    this.slService.addIngredient(newIngredient);
  }

}
