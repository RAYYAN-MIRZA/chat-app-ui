import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"chap-app-c2fb1","appId":"1:839592872747:web:4bdebf09dbe71e2585136e","databaseURL":"https://chap-app-c2fb1-default-rtdb.firebaseio.com","storageBucket":"chap-app-c2fb1.appspot.com","apiKey":"AIzaSyBvonX4WEX3ezCGpZVYz2n-7u6ojrP49i0","authDomain":"chap-app-c2fb1.firebaseapp.com","messagingSenderId":"839592872747"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
