import { Component,ViewChild,ElementRef,OnInit  } from '@angular/core';
import {NavController, Platform, AlertController, LoadingCmp, LoadingController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


declare var google:any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {


  @ViewChild("map") mapElement:ElementRef;
  map:any;
  markers = [];

  public values:any=[];
  public lat1:number=7.961216;
  public lon1:number=80.727311;
  public lat2:any=9.66149;
  public lon2:any=80.025547;
  public lat11:any;
  public lon11:any;
  public posstion:any;
  public distance:any;

  public locationarray:any=[];

  constructor(public navCtrl: NavController,public geolocation:Geolocation,public alert:AlertController,public platform: Platform,private  loadingCtrl: LoadingController,private launchnavigator:LaunchNavigator) {

    var temp = this;
    setInterval(function(){

      //temp.locationarray.splice(0, temp.locationarray.length);
      while(temp.locationarray.length > 0) {
        temp.locationarray.pop();
      }
      temp.buslocation();
      temp.initMap();

    }, 30000);

  }


  ngOnInit() {

    this.initMap();
    this.getlocation();
  }


  //notify will work when using sos
  notify()
  {

    console.log("lon1",this.lon11);
    console.log("lon2",this.lon2);

    console.log("lat1",this.lat11);
    console.log("lat2",this.lat2);


    var radlat1 = Math.PI * this.lat11/180;
    var radlat2 = Math.PI * this.lat2/180;
    var theta = this.lon11-this.lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    /*console.log("Sign Check ", Math.sin(radlat1));*/
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;

    console.log("Distance ",dist);


    if(dist<this.distance && this.distance!=null)
    {

      let prompt = this.alert.create({
        title: 'You are in a critical Situation ',
        message: "Move from you place your Disaster location is "+this.posstion,

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




  private getlocation()
  {



    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.lat1 = position.coords.latitude;
      this.lon1 = position.coords.longitude;
      this.lat11 = position.coords.latitude;
      this.lon11 = position.coords.longitude;
      /*
       console.log("test1", this.lat1);
       console.log("test2", this.lon1);*/
    });

  }

  private initMap() {


    this.getlocation();
    let element = document.getElementById('map');


    var point = {lat: this.lat1, lng: this.lon1};

    /* console.log("test3", this.lat1);
     console.log("test4", this.lon1);*/
    let divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 7,
      disableDefaultUI: false,
      draggable: true,
      zoomControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    if(this.lat1!=7.961216 && this.lon1!=80.727311)
    {
      this.locationarray.push(point);
      this.createMapMarker(this.locationarray);
    }

  }

  private createMapMarker(place:any):void {

    for (var i=0; i<place.length; i++) {
      var marker = new google.maps.Marker({
        map: this.map,
        position: place[i]
      });
      this.markers.push(marker);
    }
  }


  doRefresh(refresher)
  {

    while(this.locationarray.length > 0) {
      this.locationarray.pop();
    }

    console.log('Begin async operation', refresher);
    this.initMap();
    this.buslocation();


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);

    this.getlocation();
  }


  private buslocation() {


    let element = document.getElementById('map');


    var point = {lat: this.lat2, lng: this.lon2};

    /* console.log("test3", this.lat1);
     console.log("test4", this.lon1);*/
    let divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 7,
      disableDefaultUI: false,
      draggable: true,
      zoomControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.locationarray.push(point);
    this.createMapMarker(this.locationarray);

  }

  navigate()
  {
    this.launchnavigator.navigate([this.lat2,this.lon2]);
  }



}
