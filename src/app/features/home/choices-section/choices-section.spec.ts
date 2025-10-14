import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicesSection } from './choices-section';

describe('ChoicesSection', () => {
  let component: ChoicesSection;
  let fixture: ComponentFixture<ChoicesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoicesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoicesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
