import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';
import {BusProvider} from "../../providers/bus/bus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public seat:any;


  constructor(public navCtrl: NavController,public bus:BusProvider) {
  }

  Book()
  {
    this.bus.setvalues(this.seat);
    this.navCtrl.push(BookPage);
  }

}
