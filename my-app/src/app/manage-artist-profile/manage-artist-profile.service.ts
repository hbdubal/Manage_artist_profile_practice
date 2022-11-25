import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ManageArtistProfileService {
  private weekdays1Url: string;
  private weekdays2Url: string;

  constructor(private http: HttpClient) {
    this.weekdays1Url = 'http://localhost:3000/weekdays1';
    this.weekdays2Url = 'http://localhost:3000/weekdays2'
  }

  getallWeekdays1():Observable<any>{
    return this.http.get<any>(this.weekdays1Url);
  }
  getallWeekdays2():Observable<any>{
    return this.http.get<any>(this.weekdays2Url);
  }
}
