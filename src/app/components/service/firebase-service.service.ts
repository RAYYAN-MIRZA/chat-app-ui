import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  private firebaseConfig = {
    apiKey: 'AIzaSyBvonX4WEX3ezCGpZVYz2n-7u6ojrP49i0',
    authDomain: 'chap-app-c2fb1.firebaseapp.com',
    projectId: 'chap-app-c2fb1',
    storageBucket: 'chap-app-c2fb1.appspot.com',
    messagingSenderId: '839592872747',
    appId: '1:839592872747:web:4bdebf09dbe71e2585136e',
  };
  // Initialize Firebase app
  private firebaseApp = initializeApp(this.firebaseConfig);

  // Get reference to the database
  public database: Database;
  //  = getDatabase(this.firebaseApp);

  constructor() {
    this.database = getDatabase(this.firebaseApp);
    console.log('firbase service speak, this.database->',this.database);
  }
  public getDatabaseRef(path: string) {
    return ref(this.database, path);
  }

}
