import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';

import {StorageKeys, StorageService} from "../../storage";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggined = StorageService.instance.getItem(StorageKeys.auth);
    if (!!isLoggined) {
      return true;
    }
    // this.router.navigateByUrl('/tabs');
    return  true; // todo change after api complete
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggined = StorageService.instance.getItem(StorageKeys.auth);
    if (!!isLoggined) {
      return true;
    }
    // this.router.navigateByUrl('/tabs');
    return  true; // todo change after api complete
  }

}

