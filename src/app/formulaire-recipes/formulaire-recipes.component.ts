import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Recette } from '../models/recette';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-formulaire-recipes',
  templateUrl: './formulaire-recipes.component.html',
  styleUrls: ['./formulaire-recipes.component.sass']
})
export class FormulaireRecipesComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(''),
    preparation: new FormControl(''),
    ingredients: new FormControl(''),
  })
  newRecipe = new Recette();
  listIngredient = new Array<Ingredient>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.addForm.value)
    this.newRecipe = this.addForm.value;
    console.log(this.newRecipe);
    this.addForm.reset();
  }

}
