import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

import {AlertService} from '../providers/alert.service';
import {AuthService} from '../providers/auth.service';
import {StorageKeys, StorageService} from "../../storage";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userData = StorageService.instance.getItem(StorageKeys.auth, true);
    if (userData) {
      let headers = request.headers.append('access-token', userData['access-token']);
      request = request.clone({
        headers
      });
    }

    if (!/sign_in/.test(request.url) && !userData) {
      this.clearSessionState();
      return;
    }

    return next.handle(request).pipe(
      catchError((res) => {
        // when session closed move to sign in page
        if (res instanceof HttpErrorResponse && res.status === 401) {
          this.clearSessionState();
        }
        return throwError(res);
      })
    );

  }

  clearSessionState() {
    this.authService.clearSessionState();
    this.alertService.toastAlert('Your session was closed! please sign in again');
    this.router.navigateByUrl('/sign-in');
  }

}
