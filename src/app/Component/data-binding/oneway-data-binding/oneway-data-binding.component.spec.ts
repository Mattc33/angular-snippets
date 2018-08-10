import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayDataBindingComponent } from './oneway-data-binding.component';

describe('OnewayDataBindingComponent', () => {
  let component: OnewayDataBindingComponent;
  let fixture: ComponentFixture<OnewayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewayDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
