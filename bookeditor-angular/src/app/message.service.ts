import { Injectable } from '@angular/core';

/* La componente è dichiarata Injectable in modo da poter utilizzare le funzioni e le variabili dichiarati al suo interno 
in altre parti del progetto */
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  
}
