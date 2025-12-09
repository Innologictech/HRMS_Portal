import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinancesComponent } from './my-finances.component';

describe('MyFinancesComponent', () => {
  let component: MyFinancesComponent;
  let fixture: ComponentFixture<MyFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFinancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
