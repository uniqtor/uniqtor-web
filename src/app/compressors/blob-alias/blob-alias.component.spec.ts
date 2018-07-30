import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobAliasComponent } from './blob-alias.component';

describe('BlobAliasComponent', () => {
  let component: BlobAliasComponent;
  let fixture: ComponentFixture<BlobAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
