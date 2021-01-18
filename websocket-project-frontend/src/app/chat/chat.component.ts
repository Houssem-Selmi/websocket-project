import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // Holding the chat messages
  messages: any[] = [];
  username: string = '';
  theme: string = '';
  avatar: string = '';

  @Input('username')
  set setUsername(value: string) {
    this.username = value;
  }

  @Input('theme')
  set setTheme(value: string) {
    this.theme = value;
  }
  @Input('avatar')
  set setAvatar(value: string) {
    this.avatar = value;
  }

  constructor(public chatService: ChatService) {}
  ngOnInit(): void {}

  // Prepare the chat message then call the chatService method 'sendMessage' to actually send the message
  sendMessage(event: any, avatar: string) {
    let obj: Message = {
      text: event.message,
      avatar: avatar,
      username: this.username
    };

    this.chatService.sendMessage(obj);
  }
}
