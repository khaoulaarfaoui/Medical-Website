import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienUtilsComponent } from './lien-utils.component';

describe('LienUtilsComponent', () => {
  let component: LienUtilsComponent;
  let fixture: ComponentFixture<LienUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
