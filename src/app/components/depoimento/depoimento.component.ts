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
       trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DepoimentoComponent implements OnInit {

  depoimento: Depoimento;
  depoimentos: Depoimento[];
  depoimentoId: number;
  intervalId: number;
  isOpen: boolean = true;

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
        this.changeDepoimento();
      }
    })
  }

  ngOnDestroy( ) {
    clearInterval( this.intervalId );
  }

  changeDepoimento() {
    console.dir(this.depoimento);
    this.isOpen = true;
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
      }
    }, 8000)
    let that = this;
    setTimeout( () => { that.isOpen = false })
  }

}