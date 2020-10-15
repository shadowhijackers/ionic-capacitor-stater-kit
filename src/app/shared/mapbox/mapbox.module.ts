import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapboxDirective } from './mapbox.directive';

@NgModule({
  declarations: [
    MapboxDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapboxDirective
  ]
})
export class MapboxModule { }
