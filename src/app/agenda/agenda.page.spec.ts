import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaPage } from './agenda.page';

describe('AgendaPage', () => {
  let component: AgendaPage;
  let fixture: ComponentFixture<AgendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter tour dates by date, event, location or venue', () => {
    component.searchTerm = 'São Paulo';

    expect(component.filteredTourDates.length).toBe(2);
    expect(component.filteredTourDates.every((item) => item.location.includes('São Paulo') || item.venue.includes('Tokio Marine Hall'))).toBeTrue();
  });

  it('should ignore accents when filtering', () => {
    component.searchTerm = 'Sao Paulo';

    expect(component.filteredTourDates.length).toBe(2);
    expect(component.filteredTourDates.every((item) => item.location.includes('São Paulo') || item.venue.includes('Tokio Marine Hall'))).toBeTrue();
  });
});
