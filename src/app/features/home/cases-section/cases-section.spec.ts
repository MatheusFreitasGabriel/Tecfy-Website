import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSection } from './cases-section';

describe('CasesSection', () => {
  let component: CasesSection;
  let fixture: ComponentFixture<CasesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
