import {Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:5678/webhook-test/send-reply';
  protected readonly title = signal('frontend');
}
