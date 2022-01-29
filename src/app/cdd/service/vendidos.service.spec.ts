import { TestBed } from '@angular/core/testing';

import { VendidosService } from './vendidos.service';

describe('VendidosService', () => {
  let service: VendidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
