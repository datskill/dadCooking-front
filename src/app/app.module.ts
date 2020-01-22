import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableCooking } from './table-cooking/table-cooking.component';
import { MaterialModule } from './material-module/material-module.module';
import { FormulaireRecipesComponent } from './formulaire-recipes/formulaire-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireIngredientComponent } from './formulaire-ingredient/formulaire-ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    TableCooking,
    FormulaireRecipesComponent,
    FormulaireRecipesComponent,
    FormulaireIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
