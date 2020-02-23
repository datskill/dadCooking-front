import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FoodService } from 'src/api/food.service';
import { Food } from '../models/food';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-formulaire-ingredient',
  templateUrl: './formulaire-ingredient.component.html',
  styleUrls: ['./formulaire-ingredient.component.sass']
})
export class FormulaireIngredientComponent implements OnInit {



  displayedColumns: string[] = ['name', 'delete'];
  dataSource = new MatTableDataSource<Food>();
  FoodListe = Array<Food>();

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
  })
  newFood = new Food();
  isSubmitted: boolean = false;
  ingredientName: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _snackBar: MatSnackBar, private foodService: FoodService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/delete-24px.svg'));
  }

  ngOnInit() {
    this.foodService.getAllFood().subscribe(data => {
      this.FoodListe = data;
      this.setupDataSource(data);
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  setupDataSource(FoodListe: Food[]) {
    this.dataSource = new MatTableDataSource(FoodListe);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  reloadData() {
    this.foodService.getAllFood().subscribe(data => {
      this.FoodListe = data;
      this.setupDataSource(data);
    });
  }


  delete(element: number) {
    this.foodService.deleteFood(element).subscribe(res => {
      this.reloadData();
      console.log(element);
    });

  };



  OnSubmit() {
    this.foodService.PostFood(this.addForm.value.name).subscribe(data => {
      this.isSubmitted = true;
      this.reloadData();
    });
  }

}
