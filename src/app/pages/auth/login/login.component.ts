import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../core/services/auth/login/login.service';
import { UserDataLogin } from '../../../core/models/auth/userLogin.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public errorsLogin: string = '';
  public successRegister: string = '';
  constructor(
    private loginService: LoginService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.router.queryParamMap.subscribe((params) => {
      const registerStatus = params.get('register');
      if (registerStatus === 'success') {
        this.successRegister =
          'Your account has been saved successfully. You can now log in.';
      }
    });
  }

  userData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.userData.get('email');
  }

  get password() {
    return this.userData.get('password');
  }

  onSubmit() {
    if (this.userData.invalid) {
      return;
    }

    this.loginService.login(this.userData.value as UserDataLogin).subscribe({
      error: (error: HttpErrorResponse) => {
        this.errorsLogin = error.message;

        setTimeout(() => {
          this.errorsLogin = '';
        }, 5000);
      },
      complete: () => {
        this.route.navigate(['/user']);
      },
    });
  }
}
