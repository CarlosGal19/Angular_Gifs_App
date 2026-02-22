import { Routes } from '@angular/router';
// import { DashboardPage } from './Gifs/Pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {
    path: 'dashboard',
    // loadComponent: () => import('./Gifs/Pages/dashboard-page/dashboard-page').then(c => c.DashboardPage),
    loadComponent: () => import('./Gifs/Pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./Gifs/Pages/trending-page/trending-page'),
      },
      {
        path: 'search',
        loadComponent: () => import('./Gifs/Pages/search-page/search-page'),
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./Gifs/Pages/gif-history/gif-history'),
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
