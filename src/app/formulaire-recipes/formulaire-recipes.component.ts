import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Recette } from '../models/recette';
import { Ingredient } from '../models/ingredient';
import { IngredientService } from 'src/api/ingredient.service';
import { FoodService } from 'src/api/food.service';
import { Food } from '../models/food';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';
import { RecetteService } from 'src/api/recette.service';

@Component({
  selector: 'app-formulaire-recipes',
  templateUrl: './formulaire-recipes.component.html',
  styleUrls: ['./formulaire-recipes.component.sass']
})
export class FormulaireRecipesComponent implements OnInit {

  @ViewChild(SelectAutocompleteComponent, { static: false }) multiSelect: SelectAutocompleteComponent;



  addIngredient = new FormGroup({
    foodId: new FormControl('', Validators.required),
    quantite: new FormControl('', Validators.required),
    unite: new FormControl('', Validators.required),

  })

  addForm = new FormGroup({
    name: new FormControl(''),
    preparation: new FormControl('')
  })

  newFood = new Food();
  isSubmitted: boolean = false;
  ingredientName: string;
  newRecipe = new Recette();
  listFood = new Array<Food>();
  SelectedIngredients = new Array<any>();
  ArrayofIds = [];
  listIngredient = new Array<Ingredient>();

  constructor(private formBuilder: FormBuilder, private FoodService: FoodService,
    private ingredientService: IngredientService, private recetteService: RecetteService) {

  }
  getUnite(FullUniteName: string) {
    switch (FullUniteName) {
      case 'g': {
        FullUniteName = 'GRAMME';
        return FullUniteName;
      }
      case "l": {
        FullUniteName = 'Litre';
        return FullUniteName;
      }
      case "kg": {
        FullUniteName = 'KILO';
        return FullUniteName;
      }
      case "ml": {
        FullUniteName = 'MILLILITRE';
        return FullUniteName;
      }
      case "cl": {
        FullUniteName = 'CENTILITRE';
        return FullUniteName;
      }
      default: {
        FullUniteName = 'NONE';
        return FullUniteName;
      }
    }
  }
  selectedOptions = [];

  selected = this.selectedOptions;
  showError = false;
  errorMessage = '';

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  getSelectedOptions(selected) {
    this.selected = selected;
  }

  onResetSelection() {
    this.selectedOptions = [];
  }

  ngOnInit() {
    this.FoodService.getAllFood().subscribe(data => {
      this.listFood = data;
      console.log('All Foods', data);
    });
    this.ingredientService.getAllIIngredient().subscribe(data => {
      this.listIngredient = data;
      console.log("data", data);
    })

  }

  reloadData() {
    this.ingredientService.getAllIIngredient().subscribe(data => {
      this.listIngredient = data;
    });
  }

  onSubmit() {
    console.log(this.addForm.value)
    this.newRecipe = this.addForm.value;
    console.log(this.newRecipe);
    this.addForm.reset();
  }

  SaveIngredients() {
    this.FoodService.PostFood(this.addIngredient.value.name).subscribe(data => {
      this.isSubmitted = true;
    });
  }

  postIngredients() {
    const FullUniteName = this.getUnite(this.addIngredient.value.unite);
    console.log('FULL UNITE NAME', FullUniteName);
    this.ingredientService.PostIngredient(this.addIngredient.value.foodId, this.addIngredient.value.quantite, FullUniteName)
      .subscribe(data => {
        const foodName = this.listFood.filter(x => this.addIngredient.value.foodId === x.id)[0].name;
        const FoodId = this.listFood.filter(x => this.addIngredient.value.foodId === x.id)[0].id;
        this.ArrayofIds.push({ "foodId": this.addIngredient.value.foodId, "quantite": this.addIngredient.value.quantite, "unite": FullUniteName });
        console.log('array of ids', this.ArrayofIds);
        this.SelectedIngredients.push({ name: foodName, quantite: this.addIngredient.value.quantite, unite: this.addIngredient.value.unite });
        console.log('SelectedIngredients', this.SelectedIngredients)
        this.reloadData();
        return this.SelectedIngredients;
      })
  }

  postRecipe() {
    const listIdIngredient = this.ArrayofIds.map(x => {
      console.log("x", x);
      const alreadyExist = this.listIngredient.filter(ingre => {
        if (ingre.quantite === Number(x.quantite) && ingre.unite === x.unite && ingre.food.id === x.foodId) return ingre;
      });
      if (alreadyExist.length >= 1) {
        return alreadyExist[0].id;
      }
    });
    console.log("listIdIngredient", listIdIngredient)
    this.recetteService.PostRecipe(listIdIngredient, this.addForm.value.name, this.addForm.value.preparation).subscribe(data => {
      console.log("recipe posted data", data);
    })
  }
}
