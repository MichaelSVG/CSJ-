import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasSeguimientoComponent } from './vistas-seguimiento.component';

describe('VistasSeguimientoComponent', () => {
  let component: VistasSeguimientoComponent;
  let fixture: ComponentFixture<VistasSeguimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistasSeguimientoComponent]
    });
    fixture = TestBed.createComponent(VistasSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
