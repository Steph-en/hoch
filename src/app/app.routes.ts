import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PropertyListingComponent } from './Pages/property-listing/property-listing.component';
import { PropertyDetailsComponent } from './Pages/property-details/property-details.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

export const routes: Routes = [
    {
        path: '/',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page | HOCH'
    },
    {
        path: 'propety-listing',
        component: PropertyListingComponent,
        children: [
            {
                path: 'property-details',
                component: PropertyDetailsComponent,
                title: 'Property Details Page | HOCH'
            }
        ],
        title: 'Property Listing Page | HOCH'
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us Page | HOCH'
    }
];
