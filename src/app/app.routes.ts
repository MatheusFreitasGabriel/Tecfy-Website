import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contato } from './pages/contato/contato';
import { PoliticaPrivacidade } from './pages/politica-privacidade/politica-privacidade';
import { TermosDeUso } from './pages/termos-de-uso/termos-de-uso';
import { PoliticaCookies } from './pages/politica-cookies/politica-cookies';

export const routes: Routes = [
    {path: '', component: Home, title: 'Página Inicial | Tecfy'},
    {path: 'contato', component: Contato, title: 'Entre em Contato | Tecfy'},
    {path: 'politica-de-privacidade', component: PoliticaPrivacidade, title: 'Política de Privacidade | Tecfy'},
    {path: 'termos-de-uso', component: TermosDeUso, title: 'Termos de Uso | Tecfy'},
    {path: 'politica-de-cookies', component: PoliticaCookies, title: 'Política de Cookies | Tecfy'},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
