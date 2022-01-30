import { TestBed } from '@angular/core/testing';

import { VendidosMService } from './vendidos-m.service';

describe('VendidosMService', () => {
  let service: VendidosMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendidosMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
