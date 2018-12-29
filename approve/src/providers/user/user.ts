import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';
import { BASE_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable()
export class UserProvider {

  constructor(
    public http: HttpProvider
  ) {
  }

  login(userName, password): Observable<any> {
    return this.http.post(`${BASE_URL}/login`, {
      userName: userName,
      password: password
    });
  }

  getMe(): Observable<any> {
    return this.http.get(`${BASE_URL}/personInfo`);
  }

  getMySelfInfo(): Observable<any> {
    return this.http.get(`${BASE_URL}/personInfo/statement`);
  }

  saveMySelfInfo(selfInfo): Observable<any> {
    return this.http.post(`${BASE_URL}/personInfo/statement`, selfInfo);
  }

}
