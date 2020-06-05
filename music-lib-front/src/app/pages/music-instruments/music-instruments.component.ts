import { Component, OnInit } from '@angular/core';
import {MusicInstrumentsService} from '../../services/music-instruments.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-music-instruments',
  templateUrl: './music-instruments.component.html',
  styleUrls: ['./music-instruments.component.scss']
})
export class MusicInstrumentsComponent implements OnInit {

  constructor(private musicInstrumentsService: MusicInstrumentsService) { }

  data: object;

  ngOnInit(): void {
    this.musicInstrumentsService.getMusicInstrumentById(1).pipe(
      tap(items => {
        this.data = items;
      })
    ).subscribe();
    console.log(this.data);
  }
}
