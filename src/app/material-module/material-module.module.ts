import { NgModule } from '@angular/core';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatTooltipModule


} from '@angular/material';

@NgModule({

  exports: [
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    SelectAutocompleteModule,
    MatButtonModule,
    MatTooltipModule,
  ],

  providers: [

  ],
  declarations: []
})
export class MaterialModule { }