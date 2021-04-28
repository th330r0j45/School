import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CharactersI } from 'src/app/interfaces/characters';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: CharactersI[];

  constructor(
    private apiService: ApiService  ) { }

  ngOnInit(): void {
    this.apiService.GetAllCharacteracters().subscribe( data => (this.characters = data ));
    this.apiService.GetAllCharacteracters().subscribe( data => console.log(data));
  };

}
