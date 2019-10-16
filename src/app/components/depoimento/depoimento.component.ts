import { Component, OnInit } from '@angular/core';
import {Depoimento} from "../shared/depoimento";
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { DepoimentosService } from '../../services/depoimentos.service';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css']
})
export class DepoimentoComponent implements OnInit {

  depoimento: Depoimento;
  depoimentos: Depoimento[];
  depoimentoId: number;
  intervalId: number;

  constructor(
    private depoimentosService: DepoimentosService;
  ) { }

  ngOnInit() {
    this.depoimentosService.getActiveDepoimentos()
    .subscribe({
      error: error => console.log(error),
      next: list => {
        this.depoimentos = list
        this.depoimento = this.depoimentos[0];
        this.depoimentoId = 0;
        this.changeDepoimento();
      }
    })
  }

  ngOnDestroy( ) {
    clearInterval( this.intervalId );
  }

  changeDepoimento() {
    this.depoimento 
    this.intervalId = setInterval( ()=>{
      if ( this.depoimentoId < this.depoimentos.length) {
        this.depoimentoId++;
        this.depoimento = this.depoimentos[this.depoimentoId];
      }
      else {
        this.depoimentoId = 0;
        this.depoimento = this.depoimentos[this.depoimentoId];
      }
    }, 8000)
  }

}