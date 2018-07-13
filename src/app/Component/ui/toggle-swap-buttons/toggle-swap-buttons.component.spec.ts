import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwapButtonsComponent } from './toggle-swap-buttons.component';

describe('ToggleSwapButtonsComponent', () => {
  let component: ToggleSwapButtonsComponent;
  let fixture: ComponentFixture<ToggleSwapButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSwapButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwapButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
