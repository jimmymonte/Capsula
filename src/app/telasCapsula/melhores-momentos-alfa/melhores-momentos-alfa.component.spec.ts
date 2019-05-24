import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosAlfaComponent } from './melhores-momentos-alfa.component';

describe('MelhoresMomentosAlfaComponent', () => {
  let component: MelhoresMomentosAlfaComponent;
  let fixture: ComponentFixture<MelhoresMomentosAlfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosAlfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
