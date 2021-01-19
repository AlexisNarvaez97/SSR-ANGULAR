import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response, User } from 'src/app/shared/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public APP_ID = '60071a1f5f5fb7176e15801f';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    let headers = new HttpHeaders();
    headers = headers.set('app-id', this.APP_ID);

    const path = `${environment.USERS_URL}`;
    return this.http
      .get<Response>(path, { headers })
      .pipe(
        map((resp) => {
          return resp.data;
        })
      );
  }

  public getUser(id: string): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('app-id', this.APP_ID);

    const path = `${environment.USERS_URL}/${id}`;
    return this.http.get<any>(path, { headers });
  }
}
