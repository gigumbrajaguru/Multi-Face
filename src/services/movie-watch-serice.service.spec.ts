import { TestBed } from '@angular/core/testing';

import { MovieWatchSericeService } from './movie-watch-serice.service';

describe('MovieWatchSericeService', () => {
  let service: MovieWatchSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieWatchSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
