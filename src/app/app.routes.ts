import { Routes } from '@angular/router';
import { CardsComponent } from './pages/complements/cards/cards.component';
import { MainComponent } from './pages/main/main.component';
import { PruebasComponent } from './pages/complements/pruebas/pruebas.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'main/:pokemon',
        component: MainComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'pruebas',
        component: PruebasComponent
    }
];
