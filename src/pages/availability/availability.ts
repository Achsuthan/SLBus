import { Component } from '@angular/core';
import {NavController, App, AlertController} from 'ionic-angular';
import {BookingProvider} from "../../providers/booking/booking";
import {HomePage} from "../home/home";
import {BusProvider} from "../../providers/bus/bus";

@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html'
})
export class AvailabilityPage {

  public time:any=60;
  public people:any;
  public seats:any=[];

  constructor(public navCtrl: NavController,public booking :BookingProvider,public app:App,public bus:BusProvider,public alertCtrl:AlertController) {

    this.people=this.bus.seat;
    this.seats=this.booking.seats;
    var temp = this;

    setInterval(function(){
      temp.time=temp.time-1;
      if (temp.time==0)
      {
        temp.app.getRootNav().setRoot(HomePage);
      }
    }, 1000);

  }

  home()
  {
    this.time=0;
    this.app.getRootNav().setRoot(HomePage);
  }

  reservation()
  {
    let prompt = this.alertCtrl.create({
      title: 'Note This',
      message: "Reserve the ticket",

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok');
          }
        }
      ]
    });
    prompt.present();
  }

  payment()
  {
    let prompt = this.alertCtrl.create({
      title: 'Note This',
      message: "Online payment",

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok');
          }
        }
      ]
    });
    prompt.present();
  }

}
