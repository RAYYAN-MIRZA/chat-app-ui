import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  private firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
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
