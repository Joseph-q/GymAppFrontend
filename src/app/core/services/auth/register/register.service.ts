import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../../../models/auth/userRegister.interface';
import { Observable } from 'rxjs';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';

@Injectable()
export class RegisterService {
  constructor(private readonly httpClient: HttpClient) {}

  register(userRegister: UserRegister): Observable<UserRegister> {
    return this.httpClient.post<UserRegister>(
      `${environment.api}/auth/register`,
      {
        ...userRegister,
      }
    );
  }
}
