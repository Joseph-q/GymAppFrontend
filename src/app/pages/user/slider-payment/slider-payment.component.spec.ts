import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPaymentComponent } from './slider-payment.component';

describe('SliderPaymentComponent', () => {
  let component: SliderPaymentComponent;
  let fixture: ComponentFixture<SliderPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
