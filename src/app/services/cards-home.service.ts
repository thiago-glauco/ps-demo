import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireObject, PathReference, AngularFireList } from '@angular/fire/database';
import {Card} from "../shared/card";
import { RealTimeDatabaseService } from './real-time-database.service';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable()
export class CardsHomeService {
  path: string = "cardshome";
  dbRootPath: string = "cardsHome";
  baseRef: AngularFireStorageReference;
  cardsList: Card[];

  constructor(
    private storageService: StorageService,
    private db: RealTimeDatabaseService
  ) { }

  getAll( path ) {
    //this.baseRef = this.storageService.createRef( this.path );
    return this.db.getList( path )
  }

}