import {Component, OnInit} from '@angular/core';
import {MailComponent} from '../../components/mail-component/mail-component';
import {NgForOf, NgIf} from '@angular/common';
import {ReplyMail} from '../../service/reply-mail';
import {HttpClient} from '@angular/common/http';
import {MailModal} from '../../components/mail-modal/mail-modal';
import {ClickOutsideDirective} from '../../utils/clickOutsideDirective';

@Component({
  selector: 'app-home',
  imports: [
    MailComponent,
    MailModal,
    ClickOutsideDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  mailList: any;
  global_resume: any;
  reply: boolean = false;
  data: any;
  ngOnInit() {
    this.http.get<any[]>('/mailstoday.json')
      .subscribe((data:any) => {
        this.mailList = data;
        console.log(this.mailList);
      });
    this.http.get<any[]>('/global_resume.json')
      .subscribe((data: any) => {
        this.global_resume = data;
        let parsed = JSON.parse(this.global_resume.content.parts[0].text);
        this.global_resume= parsed[0];
        console.log(this.global_resume);
      });
  }
  constructor(private http: HttpClient) {}

  replyModal(mailData: any) {
    this.reply = true;
    this.data = mailData;
    // alert("This is "+mailData.expediteur);
  }
}
