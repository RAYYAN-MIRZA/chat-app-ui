import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchable-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchable-users-list.component.html',
  styleUrl: './searchable-users-list.component.css',
})
export class SearchableUsersListComponent {
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
  // create an array as filtered array and an array as all users
  // always render the display /filtered array of users
  on_user_click(user: string): void {
    console.log('user clicked ==', user);
  }
}
