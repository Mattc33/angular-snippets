import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridSelectionStateComponent } from './ag-grid-selection-state.component';

describe('AgGridSelectionStateComponent', () => {
  let component: AgGridSelectionStateComponent;
  let fixture: ComponentFixture<AgGridSelectionStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridSelectionStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridSelectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
