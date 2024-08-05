import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'products',
                loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
            },
            {
                path: '404',
                loadComponent:() => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
            },
            {
                path: '**', 
                redirectTo: '404'
            }
        ]
    },
];
