import { Component } from '@angular/core';
import { SubcriptionComponent } from '../subcription/subcription.component';
import { MembershipsSectionComponent } from '../../../section/principalHome/memberships-section/memberships-section.component';

@Component({
  selector: 'app-slider-payment',
  standalone: true,
  imports: [SubcriptionComponent, MembershipsSectionComponent],
  templateUrl: './slider-payment.component.html',
  styleUrl: './slider-payment.component.css',
})
export class SliderPaymentComponent {
  currentSlide = 0;
  changeSection() {
    this.currentSlide = 1;
    console.log('HOla');
  }

  getTransform() {
    console.log(this.currentSlide);
    return `translateX(-${this.currentSlide * 50}%)`;
  }

  prevSlide() {
    this.currentSlide = 0;
  }
}
