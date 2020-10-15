import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {SkeletonListComponent} from './components/skeleton-list/skeleton-list.component';

@NgModule({
  declarations: [
    SkeletonListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SkeletonListComponent,
  ]
})
export class SharedModule { }
