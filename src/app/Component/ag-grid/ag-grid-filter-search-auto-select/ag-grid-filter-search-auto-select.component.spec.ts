import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridFilterSearchAutoSelectComponent } from './ag-grid-filter-search-auto-select.component';

describe('AgGridFilterSearchAutoSelectComponent', () => {
  let component: AgGridFilterSearchAutoSelectComponent;
  let fixture: ComponentFixture<AgGridFilterSearchAutoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridFilterSearchAutoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridFilterSearchAutoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
