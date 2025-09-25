import { Component } from '@angular/core';
import {MailComponent} from '../../components/mail-component/mail-component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MailComponent,
    NgForOf
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  mailList: any;
}
