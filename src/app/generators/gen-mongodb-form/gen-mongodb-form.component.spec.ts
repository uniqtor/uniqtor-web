import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMongodbFormComponent } from './gen-mongodb-form.component';

describe('GenMongodbFormComponent', () => {
  let component: GenMongodbFormComponent;
  let fixture: ComponentFixture<GenMongodbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenMongodbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenMongodbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
