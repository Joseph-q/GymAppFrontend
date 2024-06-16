import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ForgotPasswordService } from '../../../core/services/auth/forgot-password/forgot-password.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  public error: Observable<string>;
  public success: boolean = false;
  constructor(private forgotPassworService: ForgotPasswordService) {
    this.error = forgotPassworService.Error;
  }

  userData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email() {
    return this.userData.get('email');
  }

  onSubmit() {
    if (!this.userData.valid) {
      return;
    }

    this.forgotPassworService.forgotPassword(this.email!.value!).subscribe({
      error: () => {
        this.success = false;
      },
      complete: () => {
        this.success = true;
      },
    });
  }
}
