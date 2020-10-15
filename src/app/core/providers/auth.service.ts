import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from "./alert.service";
import {StorageKeys, StorageService} from "../../storage";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private alertService: AlertService,
  ) {
  }

  clearSessionState() {
    this.resetLocalCache();
  }

  resetLocalCache() {
    StorageService.instance.setItem(StorageKeys.auth, '');
    StorageService.instance.setItem(StorageKeys.userData, '');
  }

}
