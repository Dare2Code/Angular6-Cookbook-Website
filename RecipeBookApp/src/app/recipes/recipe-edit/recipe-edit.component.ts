import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (parms: Params) => {
          this.id = +parms['id'];
          // Set editMode to true if there is an ID or else Set it to false
          this.editMode = parms['id'] != null;
          // console.log('Edit Mode: ' + this.editMode);
    });
  }

}
