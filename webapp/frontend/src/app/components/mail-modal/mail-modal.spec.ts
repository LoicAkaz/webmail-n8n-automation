import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailModal } from './mail-modal';

describe('MailModal', () => {
  let component: MailModal;
  let fixture: ComponentFixture<MailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
