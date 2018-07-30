import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRandomStringFormComponent } from './gen-random-string-form.component';

describe('GenRandomStringFormComponent', () => {
  let component: GenRandomStringFormComponent;
  let fixture: ComponentFixture<GenRandomStringFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenRandomStringFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenRandomStringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
