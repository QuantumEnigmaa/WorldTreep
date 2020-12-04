import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plant } from './plant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {

  constructor(private http: HttpClient) { }
  token = 'token=' + environment.apiToken;
  listPlant = environment.apiUrl + 'plants/';
  listSpecies = environment.apiUrl + 'species/';

  getPlantdata(): Observable<plant[]>{

    return this.http.get('/api/v1/plants?token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
      map( obj => obj['data'].map(itemJson => new plant(itemJson))));
  }
}






