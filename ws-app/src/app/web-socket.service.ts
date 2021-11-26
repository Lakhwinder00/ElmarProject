import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {

  constructor() {
    super({
      url: 'http://localhost:89', options: {
        reconnectionDelay: 5000,
        reconnectionDelayMax: 10000,
        transports: ['websocket','polling']
      },
    });
  }

  sendMessage(msg: string) {
    this.emit('pingMessage', msg);
  }

  getMessage() {
    return this.fromEvent('hello');
  }
}
