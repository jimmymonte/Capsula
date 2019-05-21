import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCapsulaComponent } from './dados-capsula.component';

describe('DadosCapsulaComponent', () => {
  let component: DadosCapsulaComponent;
  let fixture: ComponentFixture<DadosCapsulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCapsulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCapsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
