import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from '../models/ingredient';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-formulaire-ingredient',
  templateUrl: './formulaire-ingredient.component.html',
  styleUrls: ['./formulaire-ingredient.component.sass']
})
export class FormulaireIngredientComponent implements OnInit {

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
  })
  newIngredient = new Ingredient();
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() { }

  onSubmit() {
    this.newIngredient = this.addForm.value;
    this.addForm.reset();
  }

}
