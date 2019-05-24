import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresMomentosComponent } from './melhores-momentos.component';

describe('MelhoresMomentosComponent', () => {
  let component: MelhoresMomentosComponent;
  let fixture: ComponentFixture<MelhoresMomentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresMomentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresMomentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
