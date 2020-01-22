import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormulaireRecipesComponent } from './formulaire-recipes/formulaire-recipes.component';
import { TableCooking } from './table-cooking/table-cooking.component';
import { FormulaireIngredientComponent } from './formulaire-ingredient/formulaire-ingredient.component';


const routes: Routes = [
  {
    path: 'formulaire-recipes',
    component: FormulaireRecipesComponent
  },
  {
    path: '',
    component: TableCooking
  },
  {
    path: 'formulaire-ingredient',
    component: FormulaireIngredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
