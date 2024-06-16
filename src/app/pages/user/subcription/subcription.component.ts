import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subcription } from '../../../core/models/subcription/subcription.interface';
import { SubcriptionService } from '../../../core/services/subcription/subcription.service';
import { CommonModule } from '@angular/common';
import { UnixToDatePipe } from '../../../core/pipes/unix-to-date.pipe';
import { CapitalizeFirstPipe } from '../../../core/pipes/capitalize-first.pipe';

@Component({
  selector: 'app-subcription',
  standalone: true,
  imports: [CommonModule, UnixToDatePipe, CapitalizeFirstPipe],
  templateUrl: './subcription.component.html',
  styleUrl: './subcription.component.css',
})
export class SubcriptionComponent {
  subcription: Subcription | null = null;

  @Output() isPay: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private subService: SubcriptionService) {
    this.subService
      .getSubcriptionUser()
      .subscribe((sub) => (sub ? (this.subcription = sub) : null));
  }

  paymentTarget(): void {
    this.isPay.emit(true);
  }

  cancelSubcription(): void {
    this.subService.cancelSubcription().subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.subService
          .getSubcriptionUserNoCache()
          .subscribe((sub) => (sub ? (this.subcription = sub) : null));
      },
    });
  }
}
