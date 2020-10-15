import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import {MapboxService} from "./mapbox.service";

@Directive({
  selector: '[shMapbox]',
  providers: [
    MapboxService
  ]
})
export class MapboxDirective implements OnInit {

  @Input() options = {};
  @Output() mapReady = new EventEmitter();
  map: mapboxgl.Map;

  constructor(
    private el: ElementRef,
    private mapService: MapboxService
  ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.initializeMap({
      container: this.el.nativeElement.id,
      ...this.options
    });
    setTimeout(()=>this.map.resize(),1000);
    this.mapReady.emit(this.map);
  }

}
