import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PlansService } from '../../../core/services/plans/plans.service';
import GetPlan from '../../../core/models/plans/plan.interface';

@Component({
  selector: 'app-memberships-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memberships-section.component.html',
  styleUrl: './memberships-section.component.css',
})
export class MembershipsSectionComponent implements OnInit {
  plans!: Observable<GetPlan[] | null>;
  constructor(private planService: PlansService) {}
  ngOnInit(): void {
    this.plans = this.planService.GetPlans();
  }

  onClickPlan(planId: string) {
    this.planService.subcribeToPlan(planId).subscribe({
      error: (err) => {
        console.log(err);
      },

      next: (value: any) => {
        window.location.href = value.url;
      },

      complete: () => {
        console.log('all complete');
      },
    });
  }
}
