import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
  MatSnackBarModule

} from '@angular/material';

@NgModule({

  exports: [
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule
  ],

  providers: [

  ],
  declarations: []
})
export class MaterialModule { }