import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import {RecipeService} from '../../recipes/recipe.service';
import {RecipeModel} from '../../recipes/recipe.model';
import { map, catchError  } from 'rxjs/operators'; //for ....pipe(map(...)  and catchError())
import { throwError } from 'rxjs';

@Injectable()
export class DataStorageService {

  constructor(private httpServer: Http, private recipeService: RecipeService) {}

  storeRecipes() {
 //   const dataHeaders = new Headers({'Content-Type': 'application/json'});
    return this.httpServer.put('https://cookbook-app-storage.firebaseio.com/recipies.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpServer.get('https://cookbook-app-storage.firebaseio.com/recipies.json')
    .pipe(
      map(
        (response: Response) => {
          const recipesData: RecipeModel[] = response.json();
          for (const recipe of recipesData) {
            // checking if ingredients  is present or not from the fetched data
            if (!recipe['ingredients']) {
              // add empty array for ingredients if user deletes all ingredients
              recipe['ingredients'] = [];
            }
          }
          return recipesData;
        }
      ),
      catchError( error => {
        return throwError('Something Went Wrong');
        }
      ),
    )
    .subscribe(
        (recipesData: RecipeModel[]) => {
          this.recipeService.setRecipes(recipesData);
    });
  }
}
