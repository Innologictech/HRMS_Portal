import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeactionsComponent } from './takeactions.component';

describe('TakeactionsComponent', () => {
  let component: TakeactionsComponent;
  let fixture: ComponentFixture<TakeactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
