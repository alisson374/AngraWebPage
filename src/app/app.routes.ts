import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'albuns',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  // },
  {
    path: 'albuns',
    loadComponent: () => import('./albuns/albuns.page').then( m => m.AlbunsPage)
  },
  {
    path: 'fan-clube',
    loadComponent: () => import('./fan-clube/fan-clube.page').then( m => m.FanClubePage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then( m => m.AgendaPage)
  },
];
