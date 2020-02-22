import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/models/food';
import { Recette } from 'src/app/models/recette';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



const PostFood = 'http://localhost:8080/food';
const getAllFood = 'http://localhost:8080/foods';
const getFood = 'http://localhost:8080/food/:id';
const deleteFood = 'http://localhost:8080/food/:id'

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(foodId: number) {
    return this.http.get<Food[]>(getFood.replace(':id', foodId.toString()));
  }

  getAllFood() {
    return this.http.get<Food[]>(getAllFood);
  }

  PostFood(name: string): Observable<Food[]> {
    return this.http.post<Food[]>(PostFood, {
      name: name
    })
  }

  deleteFood(foodId: number): Observable<boolean> {
    return this.http.delete<any>(deleteFood.replace(':id', foodId.toString()));
  }

}

