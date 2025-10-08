import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Rota da Home
  {
    path: 'home',
    title: 'Página Inicial', // Opcional: define o título da aba do navegador
    loadComponent: () =>
      import('./features/home/home').then(
        (c) => c.Home
      ),
  },
  {
    path: 'about-us',
    title: 'Quem Somos',
    loadComponent: () =>
      import('./features/about-us/about-us').then(
        (c) => c.AboutUs
      ),
  },
  {
    path: 'what-we-do',
    title: 'O Que Fazemos',
    loadComponent: () =>
      import('./features/what-we-do/what-we-do').then(
        (c) => c.WhatWeDo
      ),
  },
  {
    path: 'contact',
    title: 'Crie seu projeto',
    loadComponent: () =>
      import('./features/contact/contact').then(
        (c) => c.Contact
      ),
  },
  {
    path: '**',
    title: 'Página não encontrada',
    loadComponent: () =>
      import('./features/not-found/not-found').then( // Sugestão: crie um componente para 404
        (c) => c.NotFound
      ),
  }
];
