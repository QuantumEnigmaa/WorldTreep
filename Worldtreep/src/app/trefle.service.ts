import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {
  token = 'token=' + environment.apiToken;
  listPlant = environment.apiUrl + 'plants/';
  listSpecies = environment.apiUrl + 'species/';

  constructor() { }
}
