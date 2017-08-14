import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BookPage } from '../pages/book/book';
import { AvailabilityPage } from '../pages/availability/availability';
import { FAQPage } from '../pages/faq/faq';
import { AboutPage } from '../pages/aboutus/about';
import { UserPage } from '../pages/user/user';
import { MapPage } from '../pages/map/map';
import { OTPPage } from '../pages/otp/otp';
import { NotificationPage } from '../pages/notification/notification';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { BusProvider } from '../providers/bus/bus';
import { BookingProvider } from '../providers/booking/booking';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BookPage,
    FAQPage,
    AboutPage,
    UserPage,
    MapPage,
    RegisterPage,
    OTPPage,
    NotificationPage,
    AvailabilityPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BookPage,
    FAQPage,
    AboutPage,
    UserPage,
    MapPage,
    RegisterPage,
    OTPPage,
    NotificationPage,
    AvailabilityPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    BusProvider,
    LaunchNavigator,
    BookingProvider
  ]
})
export class AppModule {}
