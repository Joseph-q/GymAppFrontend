import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { catchError, of } from 'rxjs';
import { ErrorService } from '../../errors/error.service';

@Injectable()
export class RecoverPasswordService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  recoverPassword(password: string, id: string, token: string) {
    return this.httpClient
      .patch(`${environment.api}/auth/recover-password/${id}/${token}`, {
        password,
      })
      .pipe(catchError(this.errorService.handleError));
  }
}
