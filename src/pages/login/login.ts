import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import {LoginProvider} from "../../providers/login/login";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {


  public contact:any;


  constructor(public navCtrl: NavController,public app:App,public log:LoginProvider)
  {

  }



  login()
  {
    if(this.contact!="" || this.contact!=null) {
      this.navCtrl.push(RegisterPage);
    }
  }
}
