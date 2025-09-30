import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplyMail {
  private apiUrl = 'http://192.168.1.21:5678/webhook-test/send-reply'; // URL de ton webhook n8n

  constructor(private http: HttpClient) {}

  sendEmail(to: string | undefined, subject: string, message: string) {
    const body = { to, subject, message };
    return this.http.post(this.apiUrl, body);
  }
}
