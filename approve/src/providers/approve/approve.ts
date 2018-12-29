import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProvider } from '../http/http';
import { BASE_URL,REAL_URL} from '../../config';


@Injectable()
export class ApproveProvider {

  //设置post的格式
  // private headers =new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpProvider) {
  }

  getLogDailyList(params): Observable<any> {
    return this.http.get(`${BASE_URL}/logDaily`,params);
  }
  sendDailyList(title,content,publisher,dailyId): Observable<any> {
    return this.http.post(`${BASE_URL}/logDaily`,{
      title: title,
      content: content,
      publisher:publisher,
      dailyId:dailyId,
    });
  }
  // 待办列表
  getTodoList(params): Observable<any> {
    return this.http.get(`${BASE_URL}/todo/getTodoList`,params);
  }

  deleteDaily(dialyId): Observable<any> {
    return this.http.delete(`${BASE_URL}/logDaily/${dialyId}`);
  }
  //post请求
  doPost(apiUrl,json,callback){
      var Url=REAL_URL+apiUrl;
  }
}
