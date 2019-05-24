import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosBetaComponent } from './melhores-momentos-beta.component';

describe('MelhoresMomentosBetaComponent', () => {
  let component: MelhoresMomentosBetaComponent;
  let fixture: ComponentFixture<MelhoresMomentosBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
