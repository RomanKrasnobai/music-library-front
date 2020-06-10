import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicInstrumentsComponent} from './music-instruments.component';

const routes: Routes = [
  {
    path: '',
    component: MusicInstrumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicInstrumentsRoutingModule { }
