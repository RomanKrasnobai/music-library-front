import { Component, OnInit } from '@angular/core';
import {MusicInstrumentsService} from '../../services/music-instruments.service';
import {tap} from 'rxjs/operators';
import {MusicInstrumentModel} from '../../models/music-instrument.model';

@Component({
  selector: 'app-music-instruments',
  templateUrl: './music-instruments.component.html',
  styleUrls: ['./music-instruments.component.scss']
})
export class MusicInstrumentsComponent implements OnInit {

  constructor(private musicInstrumentsService: MusicInstrumentsService) { }

  musicInstruments: MusicInstrumentModel[];

  ngOnInit(): void {
    this.musicInstrumentsService.getMusicInstruments().pipe(
      tap(items => {
        this.musicInstruments = items;
      })
    ).subscribe();
  }
}
