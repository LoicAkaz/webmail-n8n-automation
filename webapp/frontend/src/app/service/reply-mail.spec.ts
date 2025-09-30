import { TestBed } from '@angular/core/testing';

import { ReplyMail } from './reply-mail';

describe('ReplyMail', () => {
  let service: ReplyMail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplyMail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
