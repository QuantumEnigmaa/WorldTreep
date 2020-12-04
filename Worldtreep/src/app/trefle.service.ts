import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {
  
  constructor(private http: HttpClient) { }

  getPlantdata(): Observable<plant[]>{

    return this.http.get('/api/v1/plants?token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
      map( obj => obj['data'].map(itemJson => new plant(itemJson))));
  }
}






