import { TestBed } from '@angular/core/testing';

import { HtpClientService } from './htp-client.service';

describe('HtpClientService', () => {
  let service: HtpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
