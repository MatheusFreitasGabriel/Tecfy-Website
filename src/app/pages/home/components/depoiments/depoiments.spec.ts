import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Depoiments } from './depoiments';

describe('Depoiments', () => {
  let component: Depoiments;
  let fixture: ComponentFixture<Depoiments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Depoiments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Depoiments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
