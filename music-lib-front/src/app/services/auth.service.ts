import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data) {
    console.log(data);
    return this.http.post(`/api/auth/signup`, { data });
  }
}
