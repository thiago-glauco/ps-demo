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

  depoimentos: Depoimento[];

  constructor(
    private depoimentosService: DepoimentosService;
  ) { }

  ngOnInit() {
    this.depoimentosService.getActiveDepoimentos()
    .subscribe({
      error: error => console.log(error),
      next: list => this.depoimentos = list
    })
  }

}