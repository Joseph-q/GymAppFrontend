import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { StrongPasswordRegex } from '../../../core/constants/strongPasswordRegex';
import { CommonService } from '../../../core/services/common/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [CommonService],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  constructor(private commonService: CommonService) {}
  userData = new FormGroup(
    {
      password1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
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

  onSubmit() {}
}
