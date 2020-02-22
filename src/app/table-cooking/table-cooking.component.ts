import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Recette } from '../models/recette';
import { RecetteService } from '../../api/recette.service';
import { SelectionModel } from '@angular/cdk/collections';
import { pdfCreator } from 'src/api/pdf-creator-service';


@Component({
  selector: 'app-table-cooking',
  styleUrls: ['table-cooking.component.sass'],
  templateUrl: 'table-cooking.component.html',
})

export class TableCooking {
  displayedColumns: string[] = ['select', 'id', 'name', 'preparation', 'ingredients', 'delete'];
  dataSource = new MatTableDataSource<Recette>();
  RecetteListe = Array<Recette>();
  selection = new SelectionModel<Recette>(true, []);
  ingredientsSum: number;
  arrayOfid = [];

  constructor(private recetteService: RecetteService, private pdfCreatorService: pdfCreator) { }

  ngOnInit() {
    this.recetteService.getAllRecipes().subscribe(data => {
      this.RecetteListe = data;
      this.setupDataSource(this.RecetteListe);
      console.log('recette API GET ALL', data)
    });
  }

  reloadData() {
    this.recetteService.getAllRecipes().subscribe(data => {
      this.RecetteListe = data;
      this.setupDataSource(this.RecetteListe);
      console.log('recette API GET ALL', data)
    });
  }

  setupDataSource(RecetteListe: Recette[]) {
    this.dataSource = new MatTableDataSource(RecetteListe);
  }

  generatePdf() {
    this.selection.selected.forEach(data => { this.arrayOfid.push(data.id) });
    this.pdfCreatorService.PostPdfParameters(this.arrayOfid).subscribe(data => {
      console.log(data);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;

  }

  // deleteRecipe(recipeId: number) {
  //   recipeId = this.selection.selected.values[0];
  //   console.log('recipeID', recipeId);
  //   // this.recetteService.deleteRecipe(recipeId).subscribe(res => {
  //   //   this.reloadData();
  //   // })
  // }

  GetPdf(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: Recette) {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
