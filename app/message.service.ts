import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: { text: string; color: string }[] = [];
  private colors: string[] = ['red', 'blue', 'green', 'purple', 'orange'];

  getMessages() {
    return [...this.messages];
  }

  addMessage(newMessage: string) {
    if (newMessage.trim()) {
      const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.messages.push({ text: newMessage, color: randomColor });
    }
  }

  deleteMessage() {
    this.messages.pop();
  }

  changeColors() {
    this.messages = this.messages.map((msg) => ({
      ...msg,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
    }));
  }

  sortMessages(mode: string) {
    if (mode === 'Alphabetical') {
      this.messages.sort((a, b) => a.text.localeCompare(b.text));
    } else if (mode === 'Descendant') {
      this.messages.sort((a, b) => b.text.localeCompare(a.text));
    } else if (mode === 'Random') {
      this.messages.sort(() => Math.random() - 0.5);
    }
  }
}
