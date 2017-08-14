import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginProvider} from "../../providers/login/login";




@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  public gender:any;
  public firstname:any;
  public lastname:any;
  public contact:any;
  public nic;


  constructor(public navCtrl:NavController,public app:App,public data:LoginProvider)
  {

  }



  signup()
  {
    this.data.setlogin();
    this.app.getRootNav().setRoot(HomePage);
  }


  clear()
  {
  }

}
