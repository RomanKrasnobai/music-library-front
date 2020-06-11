import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MusicInstrumentModel} from '../models/music-instrument.model';

@Injectable({
  providedIn: 'root'
})
export class MusicInstrumentsService {
  constructor(private http: HttpClient) {
  }

  getMusicInstruments() {
    return this.http.get<MusicInstrumentModel[]>(`api/music-instruments/`);
  }

  getMusicInstrumentById(id: number) {
    return this.http.get(`api/music-instruments/${id}`);
  }
}
