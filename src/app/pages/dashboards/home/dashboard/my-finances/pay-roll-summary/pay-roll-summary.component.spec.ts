import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRollSummaryComponent } from './pay-roll-summary.component';

describe('PayRollSummaryComponent', () => {
  let component: PayRollSummaryComponent;
  let fixture: ComponentFixture<PayRollSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayRollSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayRollSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
