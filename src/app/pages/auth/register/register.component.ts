import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../../core/services/auth/register/register.service';
import { StrongPasswordRegex } from '../../../core/constants/strongPasswordRegex';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../../core/services/common/common.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  providers: [RegisterService, CommonService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public userForm: FormGroup;
  public errorMessage: string[] = [];

  constructor(
    private commonService: CommonService,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.userForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password1: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(StrongPasswordRegex),
        ]),
        password2: new FormControl(''),
      },
      [this.commonService.passwordValidator as ValidatorFn]
    );
  }

  public get name() {
    return this.userForm.get('name');
  }

  public get lastname() {
    return this.userForm.get('lastname');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password1');
  }

  get password2() {
    return this.userForm.get('password2');
  }

  removeErrorMessage(message: string) {
    const index = this.errorMessage.indexOf(message);
    if (index !== -1) {
      this.errorMessage.splice(index, 1);
    }
  }

  onRegister() {
    if (this.userForm.invalid) {
      return;
    }

    this.registerService
      .register({
        ...this.userForm.value,
        password: this.userForm.controls['password1'].value,
      })
      .subscribe({
        error: (err: HttpErrorResponse) => {
          const error = err.error as any;
          error.message.map((message: string) => {
            console.log(message);
            this.errorMessage?.push(message);

            console.log(this.errorMessage);
          });
        },
        complete: () => {
          this.router.navigate(['/auth/login'], {
            queryParams: {
              register: 'success',
            },
          });
        },
      });
  }
}
