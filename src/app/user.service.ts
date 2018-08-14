import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataStruct } from './dataStruct';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'http://localhost:3001/rest/api/load';
  private _url1 = 'http://localhost:3001/rest/api/post';
  constructor(private http:HttpClient) { }

   getData(): Observable<DataStruct[]>{
    return this.http.get<DataStruct[]>(this._url);
  }
  postData(resp): Observable<DataStruct[]>{
    return this.http.post<DataStruct[]>(this._url1,{msg:resp})
  }

  
}

