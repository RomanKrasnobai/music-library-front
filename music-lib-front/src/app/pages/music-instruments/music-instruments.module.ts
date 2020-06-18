import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicInstrumentsComponent} from './music-instruments.component';
import {MusicInstrumentsRoutingModule} from './music-instruments-routing.module';
import { InstrumentComponent } from './instrument/instrument.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    MusicInstrumentsComponent,
    InstrumentComponent
  ],
  imports: [
    CommonModule,
    MusicInstrumentsRoutingModule,
    MatCardModule,
  ]
})
export class MusicInstrumentsModule { }
