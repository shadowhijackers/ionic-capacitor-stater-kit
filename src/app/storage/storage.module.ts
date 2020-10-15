import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StorageService } from 'src/app/storage/storage.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [StorageService],
  bootstrap: []
})
export class StorageModule {
}
