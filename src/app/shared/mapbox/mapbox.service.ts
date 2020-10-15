import {Injectable} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

import {environment} from "../../../environments/environment";

@Injectable()
export class MapboxService {

  constructor() { }

  setAccessToken(){
    (<any>window).mapboxgl['accessToken'] = environment.mapboxgl.accessToken;
  }

  initializeMap(options: mapboxgl.MapboxOptions){
    try {

      return new mapboxgl.Map({
        container: options.container,
        accessToken: environment.mapboxgl.accessToken,
        style: environment.mapboxgl.style,
        ...options
      });

    }catch (e) {
      console.log("MAP NOT LOADED::");
      console.log(e?.message);
      return null;
    }
  }
}
