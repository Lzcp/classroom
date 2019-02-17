import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'hero', component: HeroDetailComponent},
    {path: 'news', component: NewsComponent},
    {
    path: '',
    redirectTo: '/header',
    pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })
export class AppRoutingModule { }
