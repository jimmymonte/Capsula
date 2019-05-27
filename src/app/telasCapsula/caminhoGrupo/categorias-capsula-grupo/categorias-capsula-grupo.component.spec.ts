import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCapsulaGrupoComponent } from './categorias-capsula-grupo.component';

describe('CategoriasCapsulaGrupoComponent', () => {
  let component: CategoriasCapsulaGrupoComponent;
  let fixture: ComponentFixture<CategoriasCapsulaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasCapsulaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCapsulaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
