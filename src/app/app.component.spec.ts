/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should expose the available app pages', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component.appPages.map((page) => page.url)).toEqual(['/albuns', '/agenda', '/fan-clube']);

    const router = TestBed.inject(Router);
    const links = fixture.debugElement
      .queryAll(By.directive(RouterLink))
      .map((el) => el.injector.get(RouterLink));

    expect(links.length).toEqual(3);
    expect(router.serializeUrl(links[0].urlTree!)).toEqual('/albuns');
    expect(router.serializeUrl(links[1].urlTree!)).toEqual('/agenda');
    expect(router.serializeUrl(links[2].urlTree!)).toEqual('/fan-clube');
  });
});
