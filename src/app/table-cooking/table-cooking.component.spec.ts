import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCookingComponent } from './table-cooking.component';

describe('TableCookingComponent', () => {
  let component: TableCookingComponent;
  let fixture: ComponentFixture<TableCookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
