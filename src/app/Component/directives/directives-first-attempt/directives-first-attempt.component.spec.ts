import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesFirstAttemptComponent } from './directives-first-attempt.component';

describe('DirectivesFirstAttemptComponent', () => {
  let component: DirectivesFirstAttemptComponent;
  let fixture: ComponentFixture<DirectivesFirstAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesFirstAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesFirstAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
