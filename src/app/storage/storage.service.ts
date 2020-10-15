import { Injectable } from '@angular/core';
import {LocalStorageService} from './localstorage/localstorage';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public static instance = new StorageService();
  localStorage = LocalStorageService.getInstance();

  constructor() {

  }

  getItem<T extends any>(key, isJSONTYPE = false): T {
    const data = this.localStorage.getItem(key);
    if (isJSONTYPE) {
      try {
        if (!!data) {
          return JSON.parse(data) as T;
        }
      } catch (e) {
        return false as T;
      }
    }
    return this.localStorage.getItem(key);
  }

  setItem(key: string, val, isJSONTYPE = false) {
    if (isJSONTYPE && !!val) {
      try {
        this.localStorage.setItem(key, JSON.stringify(val));
        return true;
      } catch (e) {
        return false;
      }
    }
    this.localStorage.setItem(key, val);
    return true;
  }

}

