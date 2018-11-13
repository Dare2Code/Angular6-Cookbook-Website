import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientQty') ingredientQty: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }
  onAddBtnClick() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingQty = this.ingredientQty.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingQty);
    this.ingredientAdded.emit(newIngredient);
  }

}
