import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '/',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./Pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Home Page | HOCH'
    },
    {
        path: 'propety-listing',
        loadComponent: () => import('./Pages/property-listing/property-listing.component').then((c) => c.PropertyListingComponent),
        children: [
            {
                path: 'property-details',
                loadComponent: () => import('./Pages//property-details/property-details.component').then((c) => c.PropertyDetailsComponent),
                title: 'Property Details Page | HOCH'
            }
        ],
        title: 'Property Listing Page | HOCH'
    },
    {
        path: 'about-us',
        loadComponent: () => import('./Pages/about-us/about-us.component').then((c) => c.AboutUsComponent),
        title: 'About Us Page | HOCH'
    }
];
