import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ref, onValue } from 'firebase/database';
import { FirebaseServiceService } from '../../service/firebase-service.service';

@Component({
  selector: 'app-searchable-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchable-users-list.component.html',
  styleUrl: './searchable-users-list.component.css',
})
export class SearchableUsersListComponent implements OnInit {
  // private database:any;/
  data=[];
  // private firebaseservice!:FirebaseServiceService;
  dummy_users: string[] = [
    'saad',
    'anas',
    'maaz',
    'saad',
    'anas',
    'maaz',
    'saad',
    'anas',
    'maaz',
    'saad',
    'anas',
    'maaz',
    'saad',
    'anas',
    'maaz',
    'saad',
    'anas',
    'maaz',
  ];

  constructor(private firebaseservice: FirebaseServiceService) {}
  ngOnInit(): void {
    // Use the database reference from the injected FirebaseService
    // For example, you can fetch data from a specific path in the database
    const dbRef = this.firebaseservice.getDatabaseRef('/users');

    // Use Firebase Realtime Database API to interact with the database
    onValue(
      dbRef,
      (snapshot) => {
       this.data = snapshot.val();
        console.log("received real time data --> ",this.data);
        console.log("received real time data ki lenght--> ",this.data.length);
        
      },
      {
        onlyOnce: true, // If you want to read data only once
      }
    );
  }
  // create an array as filtered array and an array as all users
  // always render the display /filtered array of users
  on_user_click(user: string='sdsd'): void {
    console.log('user clicked ==', user);
  }
}
