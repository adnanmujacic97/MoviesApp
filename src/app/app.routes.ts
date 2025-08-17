import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';


export const routes: Routes = [
{ path: '', component: HomeComponent }, // Default ruta
{ path: 'movies', component: MoviesComponent }, // /kontakti prikazuje KontaktiComponent
{ path: 'about', component: AboutComponent }, // /about prikazuje AboutComponent
{ path: '**', redirectTo: "", pathMatch: 'full' } // Fallback ruta
];

// @NgModule({
// imports: [RouterModule.forRoot(routes)],
// exports: [RouterModule]
// })
// export class AppRoutingModule { }