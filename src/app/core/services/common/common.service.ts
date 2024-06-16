import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable()
export class CommonService {
  public passwordValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password1');
    const confirmation = group.get('password2');

    if (!password || !confirmation || password.value === confirmation.value) {
      return null;
    }

    return { passwordMismatch: true };
  }
}
