import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCardsSingle } from './plans-cards-single';

describe('PlansCardsSingle', () => {
  let component: PlansCardsSingle;
  let fixture: ComponentFixture<PlansCardsSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansCardsSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansCardsSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
