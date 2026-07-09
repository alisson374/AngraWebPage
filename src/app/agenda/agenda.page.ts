import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TourDate } from 'src/data/TourDate';
import { TourDateService } from 'src/services/tour-date.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol, IonSearchbar, IonList, IonItem, IonLabel]
})

export class AgendaPage implements OnInit {
  private tourDateService: TourDateService = inject(TourDateService);
  tourDates: TourDate[] = [];
  searchTerm = '';

  ngOnInit() {
    this.tourDates = this.tourDateService.getTourDates();
  }

  get filteredTourDates(): TourDate[] {
    const term = this.normalizeText(this.searchTerm.trim());

    if (!term) {
      return this.tourDates;
    }

    return this.tourDates.filter((item) => {
      const searchableFields = [item.date, item.event, item.location, item.venue]
        .filter((value): value is string => Boolean(value))
        .map((value) => this.normalizeText(value));

      return searchableFields.some((value) => value.includes(term));
    });
  }

  private normalizeText(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

}
