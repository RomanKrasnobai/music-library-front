import {Component, Input, OnInit} from '@angular/core';
import {MusicInstrumentModel} from '../../../models/music-instrument.model';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {

  constructor() { }

  @Input() data: MusicInstrumentModel;

  ngOnInit(): void {
  }

}
