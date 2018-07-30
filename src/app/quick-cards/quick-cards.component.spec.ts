import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCardsComponent } from './quick-cards.component';

describe('QuickCardsComponent', () => {
  let component: QuickCardsComponent;
  let fixture: ComponentFixture<QuickCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
