import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRandomNumberFormComponent } from './gen-random-number-form.component';

describe('GenRandomNumberFormComponent', () => {
  let component: GenRandomNumberFormComponent;
  let fixture: ComponentFixture<GenRandomNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenRandomNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenRandomNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
