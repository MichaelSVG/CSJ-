import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasRegistroComponent } from './vistas-registro.component';

describe('VistasRegistroComponent', () => {
  let component: VistasRegistroComponent;
  let fixture: ComponentFixture<VistasRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistasRegistroComponent]
    });
    fixture = TestBed.createComponent(VistasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
