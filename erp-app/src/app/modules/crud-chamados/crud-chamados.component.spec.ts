import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudChamadosComponent } from './crud-chamados.component';

describe('CrudChamadosComponent', () => {
  let component: CrudChamadosComponent;
  let fixture: ComponentFixture<CrudChamadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudChamadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
