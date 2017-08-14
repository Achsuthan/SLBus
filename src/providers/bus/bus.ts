import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BusProvider {

  public seat:any;

  constructor(public http: Http) {
    console.log('Hello BusProvider Provider');
  }

  public setvalues(seat)
  {
    this.seat=seat;
  }

}
