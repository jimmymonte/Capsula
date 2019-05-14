import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCapsulasComponent } from './edicao-capsulas.component';

describe('EdicaoCapsulasComponent', () => {
  let component: EdicaoCapsulasComponent;
  let fixture: ComponentFixture<EdicaoCapsulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoCapsulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoCapsulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
