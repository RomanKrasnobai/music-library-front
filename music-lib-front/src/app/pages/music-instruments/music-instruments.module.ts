import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicInstrumentsComponent} from './music-instruments.component';
import {MusicInstrumentsRoutingModule} from './music-instruments-routing.module';
import { InstrumentComponent } from './instrument/instrument.component';



@NgModule({
  declarations: [
    MusicInstrumentsComponent,
    InstrumentComponent
  ],
  imports: [
    CommonModule,
    MusicInstrumentsRoutingModule,
  ]
})
export class MusicInstrumentsModule { }
