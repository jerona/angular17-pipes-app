import { Routes } from '@angular/router';

export const routes: Routes = [
    // Ruta directa no perezosa
    // Requiere default por defecto.
    {
        path: 'basic-pipes',
        title:'Pipes Básico',
        loadComponent: () => import('./pages/basic-page/basic-page.component')
    },
    {
        path: 'custom-pipes',
        title:'Pipes customizados',
        loadComponent: () => import('./pages/custom-page/custom-page.component')
    },
    {
        path: 'numbers-pipes',
        title:'Numbers Pipes',
        loadComponent: () => import('./pages/numbers-page/numbers-page.component')
    },
    {
        path: 'uncommon-pipes',
        title:'Pipes no tan Comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
    }
];
