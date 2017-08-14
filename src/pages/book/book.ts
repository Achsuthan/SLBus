import { Component } from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {BusProvider} from "../../providers/bus/bus";
import {AvailabilityPage} from "../availability/availability";
import {BookingProvider} from "../../providers/booking/booking";

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  public seats:any=[];
  public available:string;
  public notavailable:string;
  public pending:string;
  public booked:string;
  public people:any;

  public seat1:string;
  public seat2:string;
  public seat3:string;
  public seat4:string;
  public seat5:string;
  public seat6:string;
  public seat7:string;
  public seat8:string;
  public seat9:string;
  public seat10:string;
  public seat11:string;
  public seat12:string;
  public seat13:string;
  public seat14:string;
  public seat15:string;
  public seat16:string;
  public seat17:string;
  public seat18:string;
  public seat19:string;
  public seat20:string;
  public seat21:string;
  public seat22:string;
  public seat23:string;
  public seat24:string;
  public seat25:string;
  public seat26:string;
  public seat27:string;
  public seat28:string;
  public seat29:string;
  public seat30:string;
  public seat31:string;
  public seat32:string;
  public seat33:string;
  public seat34:string;
  public seat35:string;
  public seat36:string;
  public seat37:string;
  public seat38:string;
  public seat39:string;
  public seat40:string;
  public seat41:string;
  public seat42:string;

  public totalseat:any=[];

  constructor(public navCtrl: NavController,public seat:BusProvider,public booking:BookingProvider,public app:App) {

    this.people=this.seat.seat;

    this.available="green";
    this.notavailable="gray";
    this.pending="black";
    this.booked="red";


    this.seat3=this.pending;

    this.seat6=this.available;

    this.seat10=this.booked;


    this.seat1=this.notavailable;
    this.seat2=this.notavailable;

    this.seat25=this.available;
    this.seat26=this.available;
    this.seat27=this.available;
    this.seat28=this.available;
    this.seat29=this.available;
    this.seat30=this.available;



  }

 /* book(seatnumber)
  {

    //console.log(this.people);
    console.log(this.people);
    if (this.people!=0) {

      if (this.seats.length == 0) {
        this.seats.push(seatnumber);
        this.people = this.people - 1;
        if (this.people==0)
        {
          this.booking.setseats(this.seats);
          this.app.getRootNav().setRoot(AvailabilityPage);
        }
      }
      else {
        for (var i = 0; i < this.seats.length; i++) {
          if (this.seats[i] == seatnumber) {
            //console.log("remove",this.seats[i]);
            this.seats.splice(i,1);
            this.people = this.people + 1;
            break;
          }
          else {
            //console.log("push",this.seats[i]);
            this.seats.push(seatnumber);
            this.people = this.people - 1;
            if (this.people==0) {
              this.booking.setseats(this.seats);
              this.app.getRootNav().setRoot(AvailabilityPage);
            }
            break;
          }
        }
      }
    }
    else
    {
      this.booking.setseats(this.seats);
      this.app.getRootNav().setRoot(AvailabilityPage);
    }



  }
*/

 book(seatnumber)
 {

   var check=false;

   if(this.people!=0)
   {
     if(this.seats.length==0)
     {
       this.seats.push(seatnumber);
       this.setcolor(seatnumber,this.booked);
       this.people--;
     }
     else {
       for (var i = 0; i < this.seats.length; i++) {

         if (this.seats[i] == seatnumber) {
           //console.log(this.seats);
           this.setcolor(seatnumber,this.available);
           this.seats.splice(i, 1);
           this.people++;
           check = true;
         }
       }

       if (check == false) {
         this.seats.push(seatnumber);
         this.setcolor(seatnumber,this.booked);
         this.people--;
       }
       if (this.people == 0) {
         this.booking.setseats(this.seats);
         this.app.getRootNav().setRoot(AvailabilityPage);
       }
     }

   }
   else
   {
     this.booking.setseats(this.seats);
     this.app.getRootNav().setRoot(AvailabilityPage);
   }
 }

 setcolor(seatnumber,color)
 {
   if(seatnumber==25)
   {
     this.seat25=color;
   }
 }
}
