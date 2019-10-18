import { Component, OnInit,  HostBinding } from '@angular/core';
import {Depoimento} from "../shared/depoimento";
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { DepoimentosService } from '../../services/depoimentos.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css'],
  animations: [
    trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class DepoimentoComponent implements OnInit {

  depoimento: Depoimento;
  depoimentos: Depoimento[];
  depoimentoId: number;
  intervalId: number;
  isOpen: boolean = true;
  visibility = 'shown';

  constructor(
    private depoimentosService: DepoimentosService
  ) { }

  ngOnInit() {
    this.depoimentosService.getActiveDepoimentos()
    .subscribe({
      error: error => console.log(error),
      next: list => {
        console.dir(list);
        this.depoimentos = list
        this.depoimento = this.depoimentos[0];
        this.depoimentoId = 0;
      }
    });
    this.changeDepoimento();
  }

  ngOnDestroy( ) {
    clearInterval( this.intervalId );
  }

  /*changeDepoimento() {
    console.dir(this.depoimento);
    this.intervalId = setInterval( ()=>{
      this.visibility = "shown";
      if ( this.depoimentoId <= this.depoimentos.length -1) {
        this.depoimento = this.depoimentos[this.depoimentoId];
        console.dir(this.depoimento);
        this.depoimentoId++;
      }
      else {
        this.depoimentoId = 0;
        this.depoimento = this.depoimentos[this.depoimentoId];
        console.dir(this.depoimento);
      }
      let that = this;
      setTimeout( () => { that.visibility = 'hidden' }, 7000);
    }, 8000)
  }*/

  changeDepoimento ( ) {
    let that = this;
    setTimeout( () => {
      this.visibility = "hidden";
      this.depoimentoId++;
    }, 7000);

    this.intervalId = setInterval( ()=>{
      if ( this.depoimentoId <= this.depoimentos.length -1) {
        this.depoimento = this.depoimentos[this.depoimentoId];
        console.dir(this.depoimento);
        this.depoimentoId++;
      }
      else {
        this.depoimentoId = 0;
        this.depoimento = this.depoimentos[this.depoimentoId];
        console.dir(this.depoimento);
        this.depoimentoId++;
      }
      
      let that = this;
      setTimeout( () => { that.visibility = 'hidden' }, 7000);
    }, 8000)

  }

}