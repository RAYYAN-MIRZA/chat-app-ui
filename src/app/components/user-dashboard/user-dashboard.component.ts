import { Component } from '@angular/core';
import { SearchableUsersListComponent } from './searchable-users-list/searchable-users-list.component';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [SearchableUsersListComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
