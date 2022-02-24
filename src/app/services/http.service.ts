import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public ApiUrl = "http://192.168.0.28:4040/";

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string): Observable<any> {
    return this.httpClient.get<any>(this.ApiUrl + url);
  }

  post(url: string, body: any) {
    return this.httpClient.post<any>(this.ApiUrl + url, body);
  }

  delete(url: string) {
    return this.httpClient.delete<any>(this.ApiUrl + url);
  }
}
