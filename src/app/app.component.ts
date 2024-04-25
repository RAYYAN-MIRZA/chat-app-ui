import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { webSocket } from 'rxjs/webSocket';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-app-ui';
  private subject = webSocket('ws://localhost:8080');
  constructor(){
    this.subject.subscribe();
    // this.subject.subscribe({
    //   next: msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
    //   error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    //   complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    // });
  }
  sendmsg():void{
    this.subject.next({message:'front speaking'});
    // console.log("jalo")
  }
}
