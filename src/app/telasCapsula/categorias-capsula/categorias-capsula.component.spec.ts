import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCapsulaComponent } from './categorias-capsula.component';

describe('CategoriasCapsulaComponent', () => {
  let component: CategoriasCapsulaComponent;
  let fixture: ComponentFixture<CategoriasCapsulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasCapsulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCapsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
