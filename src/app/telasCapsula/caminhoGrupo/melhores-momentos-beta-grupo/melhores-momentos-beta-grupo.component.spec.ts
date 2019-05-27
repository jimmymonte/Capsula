import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosBetaGrupoComponent } from './melhores-momentos-beta-grupo.component';

describe('MelhoresMomentosBetaComponent', () => {
  let component: MelhoresMomentosBetaGrupoComponent;
  let fixture: ComponentFixture<MelhoresMomentosBetaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosBetaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosBetaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
