import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosAlfaGrupoComponent } from './melhores-momentos-alfa-grupo.component';

describe('MelhoresMomentosAlfaComponent', () => {
  let component: MelhoresMomentosAlfaGrupoComponent;
  let fixture: ComponentFixture<MelhoresMomentosAlfaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosAlfaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosAlfaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
