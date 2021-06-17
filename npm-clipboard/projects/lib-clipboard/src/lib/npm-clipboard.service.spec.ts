import { TestBed } from '@angular/core/testing';

import { NpmClipboardService } from './npm-clipboard.service';

describe('NpmClipboardService', () => {
  let service: NpmClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
