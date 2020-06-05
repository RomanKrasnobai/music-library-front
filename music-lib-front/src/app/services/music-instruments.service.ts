import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicInstrumentsService {
  constructor(private http: HttpClient) {
  }

  getMusicInstrumentById(id: number) {
    return this.http.get(`api/music-instruments/${id}`);
  }
}
