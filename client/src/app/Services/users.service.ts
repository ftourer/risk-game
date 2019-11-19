import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
/**
 * Websockets the user service Client and the server.
 */

export class UsersService {
  private serverUrl = 'http://localhost:8080/hearthstone-websocket';
  private stompClient: any;


  /**
   * The subscriptions to server websocket channels.
   */
  private userSubscription: Subscription;
  constructor() { }


  initGame() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      this.stompClient.subscribe(this.topic, function (sdkEvent) {
        _this.onMessageReceived(sdkEvent);
      });
      //_this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  };


  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
    //  this.connect();
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    console.log("Message Recieved from Server :: " + message);
    this.appComponent.handleMessage(JSON.stringify(message.body));
  }
}
