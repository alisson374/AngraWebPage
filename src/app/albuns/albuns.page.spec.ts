import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbunsPage } from './albuns.page';

describe('AlbunsPage', () => {
  let component: AlbunsPage;
  let fixture: ComponentFixture<AlbunsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first album selected', () => {
    expect(component.selectedAlbum().title).toBe('Angels Cry');
    expect(component.selectedTrack()).toBeNull();
  });

  it('should change the selected album and clear the current track', () => {
    const album = component.albums[1];

    component.selectAlbum(album);

    expect(component.selectedAlbum()).toBe(album);
    expect(component.selectedTrack()).toBeNull();
  });

  it('should move to the next and previous album in a circular way', () => {
    component.nextAlbum();
    expect(component.selectedAlbum().title).toBe('Holy Land');

    component.previousAlbum();
    expect(component.selectedAlbum().title).toBe('Angels Cry');
  });

  it('should build a video URL from the track iframe when present', () => {
    const track = component.albums[0].tracks[0];
    const url = component.getVideoUrl(track);

    expect(url).toBeTruthy();
    expect(String(url)).toContain('https://www.youtube.com/embed/');
  });
});
