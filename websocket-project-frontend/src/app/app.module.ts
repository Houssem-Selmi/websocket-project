import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {
  NbThemeModule,
  NbCardModule,
  NbLayoutModule,
  NbChatModule,
  NbInputModule,
  NbButtonModule,
  NbFormFieldModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './services/chat.service';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    NbLayoutModule,
    NbChatModule,
    NbFormFieldModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
