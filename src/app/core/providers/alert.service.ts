import { Injectable } from '@angular/core';

import {LoadingController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toast: ToastController,
    private loadingController: LoadingController
  ) { }

  async toastAlert(msg: string, type= 'Error') {
    const toast = await this.toast.create({
      header: type,
      message: msg,
      duration: 400,
      position: 'top',
      // enterAnimation: toastEnter,
    });
    toast.present();
    return  toast;
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();
    return loading;
  }

}
