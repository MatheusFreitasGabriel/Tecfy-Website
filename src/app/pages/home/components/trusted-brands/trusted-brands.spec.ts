import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBrands } from './trusted-brands';

describe('TrustedBrands', () => {
  let component: TrustedBrands;
  let fixture: ComponentFixture<TrustedBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedBrands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedBrands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
