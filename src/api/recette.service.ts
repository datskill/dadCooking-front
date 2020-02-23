import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Observable } from 'rxjs';
import { Recette } from 'src/app/models/recette';
import { HttpClient } from '@angular/common/http';


const PostRecipe = 'http://localhost:8080/recipe';
const getAllRecipes = 'http://localhost:8080/recipes';
const getRecipe = 'http://localhost:8080/recipe/:id';
const deleteRecipe = 'http://localhost:8080/recipe/:id'

@Injectable({
  providedIn: 'root'
})

export class RecetteService {

  constructor(private http: HttpClient) { }

  getRecipe(RecipeId: number) {
    return this.http.get<Recette[]>(getRecipe.replace(':id', RecipeId.toString()))
  }


  getAllRecipes() {
    try {
      return this.http.get<Recette[]>(getAllRecipes);
    }
    catch (e) {
      console.log("Exception", e)
    }
  }

  PostRecipe(ingredientsIds: any[], name: string, preparation: string): Observable<Recette[]> {
    return this.http.post<Recette[]>(PostRecipe, {
      "ingredientsIds": ingredientsIds,
      "name": name,
      "preparation": preparation,
    });
  }

  deleteRecipe(recipeId: number): Observable<boolean> {
    return this.http.delete<any>(deleteRecipe.replace(':recipeId', recipeId.toString()));
  }
}
