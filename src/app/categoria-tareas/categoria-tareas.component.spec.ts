import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTareasComponent } from './categoria-tareas.component';

describe('CategoriaTareasComponent', () => {
  let component: CategoriaTareasComponent;
  let fixture: ComponentFixture<CategoriaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
