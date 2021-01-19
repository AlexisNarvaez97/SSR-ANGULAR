import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response, User } from 'src/app/shared/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {

    let headers = new HttpHeaders();
    headers = headers.set('app-id', '60071a1f5f5fb7176e15801f');

    const path = `${environment.USERS_URL}`;
    return this.http.get<Response>(path, { headers }).pipe(
      map(resp => {
        return resp.data;
      })
    );
  }


}
