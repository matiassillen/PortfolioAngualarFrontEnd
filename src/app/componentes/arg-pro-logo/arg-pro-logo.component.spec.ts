import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgProLogoComponent } from './arg-pro-logo.component';

describe('ArgProLogoComponent', () => {
  let component: ArgProLogoComponent;
  let fixture: ComponentFixture<ArgProLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgProLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgProLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
