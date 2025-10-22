import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansSection } from './plans-section';

describe('PlansSection', () => {
  let component: PlansSection;
  let fixture: ComponentFixture<PlansSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
