import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersI} from 'src/app/interfaces/characters';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://hp-api.herokuapp.com/api/characters';
  constructor( private http: HttpClient )
  {}
  GetAllCharacteracters(): Observable<CharactersI[]>{
    return this.http.get<CharactersI[]>(this.urlApi);
  }
}



