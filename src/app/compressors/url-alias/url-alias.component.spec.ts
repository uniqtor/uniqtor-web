import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAliasComponent } from './url-alias.component';

describe('UrlAliasComponent', () => {
  let component: UrlAliasComponent;
  let fixture: ComponentFixture<UrlAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
