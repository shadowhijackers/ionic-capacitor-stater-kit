import {Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        url: request.url.replace(/^anet-api/, environment.url),
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    return next.handle(request);

  }

}
