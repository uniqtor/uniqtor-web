import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenUuidFormComponent } from './gen-uuid-form.component';

describe('GenUuidFormComponent', () => {
  let component: GenUuidFormComponent;
  let fixture: ComponentFixture<GenUuidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenUuidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenUuidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
