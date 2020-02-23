import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/models/food';
import { Observable } from 'rxjs';
import { Recette } from 'src/app/models/recette';
import { Ingredient } from 'src/app/models/ingredient';


const PostIngredient = 'http://localhost:8080/ingredient';
const getAllIngredient = 'http://localhost:8080/ingredients';
const getIngredient = 'http://localhost:8080/ingredient/:id';
const deleteIngredient = 'http://localhost:8080/ingredient/:id'

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor(private http: HttpClient) { }

  getIngredient(id: number) {
    return this.http.get<Ingredient[]>(getIngredient.replace(':id', getIngredient.toString()))
  }


  getAllIIngredient() {
    return this.http.get<Ingredient[]>(getAllIngredient);
  }

  PostIngredient(foodId: string, quantite: number, unite: string): Observable<Ingredient[]> {
    return this.http.post<Ingredient[]>(PostIngredient, {
      foodId: foodId,
      quantite: quantite,
      unite: unite
    });
  }
}
