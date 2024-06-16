import {
  Component,
  HostListener,
  OnInit,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { SubcriptionService } from '../../../core/services/subcription/subcription.service';
import { CommonModule } from '@angular/common';
import { MembershipsSectionComponent } from '../../../section/principalHome/memberships-section/memberships-section.component';
import { Subcription } from '../../../core/models/subcription/subcription.interface';
import { UnixToDaysPipe } from '../../../core/pipes/unix-to-days.pipe';
import { PlansService } from '../../../core/services/plans/plans.service';
import GetPlan from '../../../core/models/plans/plan.interface';
import { Observable, map, of, tap } from 'rxjs';
import { PaymentMethod } from '../../../core/constants/PaymentMethod.enum';

@Component({
  selector: 'app-qr-section',
  standalone: true,
  imports: [
    QRCodeModule,
    CommonModule,
    MembershipsSectionComponent,
    UnixToDaysPipe,
  ],
  templateUrl: './qr-section.component.html',
  styleUrl: './qr-section.component.css',
})
export class QrSectionComponent {
  subcription: Observable<Subcription | null> = of(null);
  planInfo: Observable<GetPlan | null> = of(null);
  qrCodeDownloadLink: SafeUrl = '';
  QrString: string = 'Initial';
  constructor(
    private subService: SubcriptionService,
    private planService: PlansService
  ) {
      this.subcription = this.subService.getSubcriptionUser().pipe(
        tap({
          next: (sub) => {
            if (sub) {
              this.QrString = sub.token;
              this.planInfo = this.planService.GetPlanById(sub.plan);
            }
          },
        })
      );
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
