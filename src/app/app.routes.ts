import { Routes } from '@angular/router';
import { ItemOverviewComponent } from './item-overview/item-overview.component';

export const routes: Routes = [
    {path: 'items', component: ItemOverviewComponent },
    { path: '', redirectTo: '/items', pathMatch: 'full' }

];
