import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'music-instruments',
    loadChildren: () => import('./pages/music-instruments/music-instruments.module').then(m => m.MusicInstrumentsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module'). then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
