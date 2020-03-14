import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PaisesComponent } from './components/paises/paises.component';

export const ROUTES: Routes = [
    // {path:,component:} rutas especificas
    // {path: ''  ,pathMatch:'full', redirectTo:'home'} esto es para que un path vacio que no se encuentre en el array redireccione al home
    // {path: '**'  ,pathMatch:'full', redirectTo:'home'} esto es para que un path vacio que no se encuentre en el array 
                                                            // redireccione al home

    { path: 'home', component: HomeComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }



]