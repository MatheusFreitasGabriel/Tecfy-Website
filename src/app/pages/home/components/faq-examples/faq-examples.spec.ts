import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqExamples } from './faq-examples';

describe('FaqExamples', () => {
  let component: FaqExamples;
  let fixture: ComponentFixture<FaqExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqExamples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
