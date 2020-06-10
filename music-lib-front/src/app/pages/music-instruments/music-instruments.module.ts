import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicInstrumentsComponent} from './music-instruments.component';
import {MusicInstrumentsRoutingModule} from './music-instruments-routing.module';



@NgModule({
  declarations: [
    MusicInstrumentsComponent
  ],
  imports: [
    CommonModule,
    MusicInstrumentsRoutingModule,
  ]
})
export class MusicInstrumentsModule { }
