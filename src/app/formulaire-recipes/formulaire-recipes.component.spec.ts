import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRecipesComponent } from './formulaire-recipes.component';

describe('FormulaireRecipesComponent', () => {
  let component: FormulaireRecipesComponent;
  let fixture: ComponentFixture<FormulaireRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
