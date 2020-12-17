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

  tallestTrees: Array<plant>; // tableau qui récupèrera la liste des arbres les plus grands pour un continent donné

  getPlantdata(): Observable<plant[]>{

    return this.http.get('/api/v1/plants?token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
      map( obj => obj['data'].map(itemJson => new plant(itemJson))));
  }

  getName(searchedPlant: plant): string { // Permet de récupérer le nom commun d'une plante
    if (searchedPlant.common_name !== null) {
      return searchedPlant.common_name;
    } else {
      console.log('Erreur, pas de nom commun pour cette plante');
      return null;
    }
  }

  // Function that gives the tallest trees of a continent
  getTallestTrees(continent: string): Observable<plant[]> {
    if (continent === 'europe') {
      // Définition de la requête complète
      const requestUrl = this.apiUrl + this.listPlant +
      '?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&' + this.token;
      return this.http.get<plant[]>(requestUrl);
    }
    else if (continent === 'asie') {
      // Définition de la requête complète
      const requestUrl = this.apiUrl + this.listPlant +
      '?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&' + this.token;
      return this.http.get<plant[]>(requestUrl);
    }
    else if (continent === 'afrique') {
      // Définition de la requête complète
      const requestUrl = this.apiUrl + this.listPlant +
      '?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&' + this.token;
      return this.http.get<plant[]>(requestUrl);
    }
    else if (continent === 'america') {
      return this.http.get('/api/v1/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=7CxQJeGq4m63Y75bdhOkS4kiUDq1ukMveitZjzU2bnc').pipe(
        map( obj => obj['data'].map(itemJson => new plant(itemJson))));
    } else {
      console.log('Erreur, continent non reconnu');
    }
  }
}






