import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaboasvindasComponent } from './telaboasvindas.component';

describe('TelaboasvindasComponent', () => {
  let component: TelaboasvindasComponent;
  let fixture: ComponentFixture<TelaboasvindasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaboasvindasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaboasvindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
