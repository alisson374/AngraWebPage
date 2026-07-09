import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AlbunsService } from 'src/services/albuns.service';
import { Album, Track } from 'src/data/Album';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.page.html',
  styleUrls: ['./albuns.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonItem, IonLabel]
})
export class AlbunsPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly albunsService = inject(AlbunsService);

  readonly albums: Album[] = this.albunsService.getAlbums();

  readonly selectedAlbum = signal<Album>(this.albums[0]);
  readonly selectedTrack = signal<Track | null>(null);

  selectAlbum(album: Album): void {
    this.selectedAlbum.set(album);
    this.selectedTrack.set(null);
  }

  selectTrack(track: Track): void {
    this.selectedTrack.set(track);
  }

  nextAlbum(): void {
    const currentIndex = this.albums.findIndex((album) => album.title === this.selectedAlbum().title);
    const nextIndex = (currentIndex + 1) % this.albums.length;
    this.selectedAlbum.set(this.albums[nextIndex]);
    this.selectedTrack.set(null);
  }

  previousAlbum(): void {
    const currentIndex = this.albums.findIndex((album) => album.title === this.selectedAlbum().title);
    const previousIndex = (currentIndex - 1 + this.albums.length) % this.albums.length;
    this.selectedAlbum.set(this.albums[previousIndex]);
    this.selectedTrack.set(null);
  }

  getVideoUrl(track: Track | null): SafeResourceUrl | null {
    if (!track) {
      return null;
    }

    const iframeUrl = track.iframeUrl;
    if (iframeUrl) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(iframeUrl);
    }

    const query = encodeURIComponent(`Angra ${track.title}`);
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/?listType=search&list=' + query);
  }
}
