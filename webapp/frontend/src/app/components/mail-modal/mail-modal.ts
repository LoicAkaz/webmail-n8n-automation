import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ReplyMail} from '../../service/reply-mail';
import {Gemini} from '../../service/gemini service/gemini';

@Component({
  selector: 'app-mail-modal',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mail-modal.html',
  styleUrl: './mail-modal.css'
})
export class MailModal implements OnInit {
  @Input({required: true}) to: string | undefined;
  @Input({required: true}) subject: any;
  @Input({required: true}) message: any;
  @Output() cancelAction: EventEmitter<any> = new EventEmitter();
  @Output() validateAction: EventEmitter<any> = new EventEmitter();
  replyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private emailService: ReplyMail, private gemini: Gemini) {
  }

  ngOnInit(): void {
    this.replyForm = this.formBuilder.group({
        subject: [null, Validators.required],
        message: [null, Validators.required],
      }
    );
  }

  cancelActionEmitter() {
    // @ts-ignore
    this.cancelAction.emit();
  }

  validateActionEmitter() {
    // @ts-ignore
    this.validateAction.emit();
  }
    sendReply() {
      const to = this.to;
      // alert("This is "+to);
      const subject = this.replyForm.get('subject')!.value;
      const message = this.replyForm.get('message')!.value;
      this.emailService.sendEmail(to, subject, message)
        .subscribe(() => {
          this.validateActionEmitter();
          alert('Email envoyé avec succès ✅');
          this.cancelActionEmitter();
        });
    }

  async generateReply() {
      const subject = await this.gemini.generateSubjectReply(
        this.subject, this.message
      )
      const content = await this.gemini.generateContentReply(
        this.subject, this.message
      )
      console.log(subject);
      this.replyForm.controls['subject']?.setValue(subject);
      this.replyForm.controls['message']?.setValue(content);
    }
}
