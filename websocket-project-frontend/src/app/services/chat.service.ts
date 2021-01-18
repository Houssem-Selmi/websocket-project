import { Injectable } from '@angular/core';
import { Message } from '../models/message';
/**
 * Declaring SockJS and Stomp : check the assets/js folder and the index.html script section
 */
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Store the chat messages
  public messages = [];

  public stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    /**
     * Create a SockJS server with created back-end endpoint called /chat-websocket and added it over Stomp.
     */
    const serverUrl = 'http://localhost:8080/chat-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    /**
     * Connect stomp client and subscribe asynchronously to the chat message-handling Controller endpoint and push any message body into the messages array
     */
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat/messages', message => {
        if (message.body) {
          let obj = JSON.parse(message.body);
          that.addMessage(obj.text, obj.username, obj.avatar);
        }
      });
    });
  }

  // Prepare and push the chat messages into the messages array
  addMessage(message: any, username: string, avatar: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      user: {
        name: username,
        avatar: avatar
      }
    });
  }

  // Send a chat message using stomp client
  sendMessage(msg: Message) {
    this.stompClient.send('/app/sendmsg', {}, JSON.stringify(msg));
  }
}
