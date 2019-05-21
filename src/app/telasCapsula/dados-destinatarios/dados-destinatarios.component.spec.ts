import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDestinatariosComponent } from './dados-destinatarios.component';

describe('DadosDestinatariosComponent', () => {
  let component: DadosDestinatariosComponent;
  let fixture: ComponentFixture<DadosDestinatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDestinatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDestinatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
