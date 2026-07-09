import { TestBed } from '@angular/core/testing';

import { TourDateService } from './tour-date.service';

describe('TourDateService', () => {
  let service: TourDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of tour dates', () => {
    const tourDates = service.getTourDates();
    expect(Array.isArray(tourDates)).toBe(true);
    expect(tourDates.length).toBeGreaterThan(0);
  });
});
