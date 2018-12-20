import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasModalComponent } from './tareas-modal.component';

describe('TareasModalComponent', () => {
  let component: TareasModalComponent;
  let fixture: ComponentFixture<TareasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
