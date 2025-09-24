import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityControl } from './velocity';

describe('Velocity', () => {
  let component: VelocityControl;
  let fixture: ComponentFixture<VelocityControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocityControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
