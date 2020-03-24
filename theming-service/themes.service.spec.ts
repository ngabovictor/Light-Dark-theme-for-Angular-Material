import { TestBed } from '@angular/core/testing';

import { ThemimgService } from './themes.service';

describe('ThemesService', () => {
  let service: ThemimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
