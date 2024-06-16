import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { StrongPasswordRegex } from '../../../core/constants/strongPasswordRegex';
import { CommonService } from '../../../core/services/common/common.service';
import { RecoverPasswordService } from '../../../core/services/auth/recover-password/recover-password.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ErrorService } from '../../../core/services/errors/error.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  providers: [CommonService, RecoverPasswordService],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css',
})
export class RecoverPasswordComponent implements OnInit {
  id: string | null = null;
  token: string | null = null;
  public error: Observable<string>;

  constructor(
    private commonService: CommonService,
    private recoverPasswordService: RecoverPasswordService,
    private router: Router,
    private route: ActivatedRoute,
    errorService: ErrorService
  ) {
    this.error = errorService.Error;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.token = params.get('token');
    });
  }

  userData = new FormGroup(
    {
      password1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(StrongPasswordRegex),
      ]),
      password2: new FormControl(''),
    },
    [this.commonService.passwordValidator as ValidatorFn]
  );

  get password() {
    return this.userData.get('password1');
  }

  get password2() {
    return this.userData.get('password2');
  }

  onSubmit() {
    if (!this.userData.valid) {
      return;
    }

    if (this.id && this.token) {
      this.recoverPasswordService
        .recoverPassword(this.password!.value!, this.id, this.token)
        .subscribe({
          complete: () => {
            this.router.navigate(['/auth/login']);
          },
        });
    }
  }
}
