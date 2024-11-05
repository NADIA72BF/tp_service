import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMessage: string = '';
  sortModes: string[] = ['Random', 'Alphabetical', 'Descendant'];
  currentSortModeIndex: number = 0;
  sortButtonLabel: string = `Sort: ${this.sortModes[this.currentSortModeIndex]}`;
  showList: boolean = true;
  toggleButtonLabel: string = 'Hide';

  constructor(private messageService: MessageService) {}

  get messages() {
    return this.messageService.getMessages();
  }

  addMsg() {
    this.messageService.addMessage(this.newMessage);
    this.newMessage = '';
  }

  couleur() {
    this.messageService.changeColors();
  }

  DelMsg() {
    this.messageService.deleteMessage();
  }

  sortMessages() {
    const sortMode = this.sortModes[this.currentSortModeIndex];
    this.messageService.sortMessages(sortMode);
    this.currentSortModeIndex = (this.currentSortModeIndex + 1) % this.sortModes.length;
    this.sortButtonLabel = `Sort: ${this.sortModes[this.currentSortModeIndex]}`;
  }

  toggleListVisibility() {
    this.showList = !this.showList;
    this.toggleButtonLabel = this.showList ? 'Hide' : 'Show';
  }
}
