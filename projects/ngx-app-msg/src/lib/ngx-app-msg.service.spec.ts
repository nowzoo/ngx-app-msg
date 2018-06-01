import { TestBed, inject } from '@angular/core/testing';

import { NgxAppMsgService } from './ngx-app-msg.service';

describe('NgxAppMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAppMsgService]
    });
  });

  it('should be created', inject([NgxAppMsgService], (service: NgxAppMsgService) => {
    expect(service).toBeTruthy();
  }));
});
