import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RickandmortyService } from '../rickandmorty.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@Component({
    selector: 'app-rickand-morty',
    standalone: true,
    providers: [RickandmortyService],
    templateUrl: './rickand-morty.component.html',
    styleUrls: ['./rickand-morty.component.scss'],
    imports: [HttpClientModule, CommonModule, MatGridListModule, MatCardModule]
})
export class RickandMortyComponent implements OnInit {




 
  characters: any

  constructor(private Servicio: RickandmortyService) {}

 

  ngOnInit(): void {



    this.Servicio.obtenerPersonajes().subscribe(
      (resultado) => {
        this.characters = resultado;
        console.log(this.characters);

  }
    )
}
}


