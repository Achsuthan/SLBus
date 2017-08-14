import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {LoginProvider} from "../providers/login/login";
import { FAQPage } from '../pages/faq/faq';
import { AboutPage } from '../pages/aboutus/about';
import { UserPage } from '../pages/user/user';
import { MapPage } from '../pages/map/map';
import { NotificationPage } from '../pages/notification/notification';
import { SettingsPage } from '../pages/settings/settings';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, name: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public login:LoginProvider,public alert:AlertController,public app:App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, name:'home' },
      { title: 'Map', component: MapPage, name: 'navigate' },
      { title: 'User', component: UserPage, name:'contact' },
      { title: 'Notification', component: NotificationPage, name:'notifications' },
      { title: 'Settings', component: SettingsPage, name:'settings' },
      { title: 'FAQ', component: FAQPage, name:'help-circle' },
      { title: 'AboutUs', component: AboutPage, name:'information-circle' },
      { title: 'Logout', component: LoginPage, name:'log-out' }


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title=="Logout")
    {
      this.login.setleave();
      this.app.getRootNav().setRoot(LoginPage);
    }

    else if (this.login.login ==true)
    {
      this.nav.setRoot(page.component);
    }
    else
    {
      let prompt = this.alert.create({
        title: 'Nope',
        message: "First Login/Register to the System",

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
}
