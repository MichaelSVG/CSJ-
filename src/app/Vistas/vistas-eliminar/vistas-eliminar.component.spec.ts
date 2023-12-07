import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasEliminarComponent } from './vistas-eliminar.component';

describe('VistasEliminarComponent', () => {
  let component: VistasEliminarComponent;
  let fixture: ComponentFixture<VistasEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistasEliminarComponent]
    });
    fixture = TestBed.createComponent(VistasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
