import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { webSocket } from 'rxjs/webSocket';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserDashboardComponent,ChatWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-app-ui';
  private subject = webSocket('ws://localhost:8080');
  constructor() {
    // this.subject.subscribe();
    this.subject.subscribe({
      next: msg => console.log('message received: ' ,msg), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete or connection closed') // Called when connection is closed (for whatever reason).
    });
  }
  ngOnInit() {
    // not working!
    console.log('oninit speaking');
  }
  sendmsg(): void {
    this.subject.next({ message: 'front speaking' });
    // console.log("jalo")
  }
  close_con(): void {
    this.subject.complete();
    console.log('bnd kr rahe');
  }
}
