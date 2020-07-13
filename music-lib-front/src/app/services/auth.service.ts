import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthUserModel} from '../models/authUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<AuthUserModel>;
  public currentUser: Observable<AuthUserModel>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthUserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  signUp(data) {
    return this.http.post<AuthUserModel>(`/api/auth/signup`, data).pipe(
      tap(user => {
          this.currentUserSubject.next(user);
          this.router.navigate(['/home']);
        }
      )
    );
  }

  signIn(data) {
    return this.http.post<AuthUserModel>(`/api/auth/signin`, data).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['/home']);
        return user;
      })
    );
  }

  signOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
