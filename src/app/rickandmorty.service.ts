import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private BaseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  obtenerPersonajes(){

    return this.http.get(this.BaseUrl+'/character')

   }
}
