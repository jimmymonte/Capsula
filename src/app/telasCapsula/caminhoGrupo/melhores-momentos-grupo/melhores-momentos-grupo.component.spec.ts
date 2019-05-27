import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosGrupoComponent } from './melhores-momentos-grupo.component';

describe('MelhoresMomentosComponent', () => {
  let component: MelhoresMomentosComponent;
  let fixture: ComponentFixture<MelhoresMomentosGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
