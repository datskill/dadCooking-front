import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireIngredientComponent } from './formulaire-ingredient.component';

describe('FormulaireIngredientComponent', () => {
  let component: FormulaireIngredientComponent;
  let fixture: ComponentFixture<FormulaireIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
