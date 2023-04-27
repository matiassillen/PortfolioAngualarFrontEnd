import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HYSSkillsComponent } from './h-y-s-skills.component';

describe('HYSSkillsComponent', () => {
  let component: HYSSkillsComponent;
  let fixture: ComponentFixture<HYSSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HYSSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HYSSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
