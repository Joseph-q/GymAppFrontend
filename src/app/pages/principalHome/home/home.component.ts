import { Component, afterRender } from '@angular/core';
import { HeaderComponent } from '../../../section/principalHome/header/header.component';
import { MembershipsSectionComponent } from '../../../section/principalHome/memberships-section/memberships-section.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { AboutUsComponent } from '../../../section/principalHome/about-us/about-us/about-us.component';
import { UbicationComponent } from '../../../section/principalHome/ubication/ubication/ubication.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MembershipsSectionComponent,
    FooterComponent,
    AboutUsComponent,
    UbicationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}
}
