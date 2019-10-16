import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireObject, PathReference, AngularFireList } from '@angular/fire/database';
import {Depoimento} from "../shared/depoimento";
import { RealTimeDatabaseService } from './real-time-database.service';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable()
export class DepoimentosService {
  path: string = "depoimentos"
  dbRootPath: string = "depoimentos";
  baseRef: AngularFireStorageReference;
  depoimentos: Depoimento[];

  constructor(
    private storageService: StorageService,
    private db: RealTimeDatabaseService
  ) { }
  getAll( ) {
    //this.baseRef = this.storageService.createRef( this.path );
    return this.db.getList( this.dbRootPath )
  }

  getActiveDepoimentos( ) {
    return this.db.getList<Depoimento>( this.dbRootPath ).pipe(
      map( (depoimentos: Depoimento[]) => depoimentos.filter(depoimento => depoimento.enabled === true) )
    )
  }
}