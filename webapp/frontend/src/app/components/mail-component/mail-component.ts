import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mail-component',
  imports: [],
  templateUrl: './mail-component.html',
  styleUrl: './mail-component.css',
})
export class MailComponent {
  @Input({required:true}) expediteur  : string | undefined;
  @Input({required:true}) objet  : string | undefined | null;
  @Input({required:true}) date  : string | undefined;
  @Input({required:true}) resume  : string | undefined;
}
