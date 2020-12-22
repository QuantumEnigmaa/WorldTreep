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

  token = 'token=' + environment.apiToken; // Nom du token fournit par l'API à mettre à la fin des requètes
  apiUrl = '/api/v1/';
  listPlant = this.apiUrl + 'plants'; // Début d'url pour accéder aux plantes
  listSpecies = this.apiUrl + 'species/'; // Début d'url pour accéder aux espèces

  getPlantdata(): Observable<plant[]>{ // test function
    return this.http.get('/api/v1/plants?token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
      map( obj => obj['data'].map(itemJson => new plant(itemJson))));
  }

  // Function that gives the tallest trees of a continent
  getTallestTrees(continent: string): Observable<plant[]> {
    if (continent === 'europe') {
      // Tallest trees in "middle Europe"
      return this.http.get('/api/v1/distributions/11/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'asia') {
      // Tallest trees in "China North-Central"
      return this.http.get('/api/v1/distributions/chn/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'africa') {
      // Tallest trees in "Africa"
      return this.http.get('/api/v1/distributions/20/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'america') {
      // Tallest trees in Arizona
      return this.http.get('/api/v1/distributions/76/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
      }
    else {
      console.log('Erreur, continent non reconnu');
    }
  }

  // Function that gives the edible plants of a given continent
  getEdiblePlants(continent: string): Observable<plant[]> {
    if (continent === 'europe') {
      // Tallest trees in "middle Europe"
      return this.http.get('/api/v1/distributions/11/plants?filter_not%5Bedible_part%5D=null&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'asia') {
      // Tallest trees in "China North-Central"
      return this.http.get('/api/v1/distributions/chn/plants?filter_not%5Bedible_part%5D=null&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'africa') {
      // Tallest trees in "Africa"
      return this.http.get('/api/v1/distributions/20/plants?filter_not%5Bedible_part%5D=null&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    }
    else if (continent === 'america') {
      // Tallest trees in Arizona
      return this.http.get('/api/v1/distributions/76/plants?ffilter_not%5Bedible_part%5D=null&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
      }
    else {
      console.log('Erreur, continent non reconnu');
    }
  }
}






