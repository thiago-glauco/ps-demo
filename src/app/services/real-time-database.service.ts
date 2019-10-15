import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, PathReference, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable()
export class RealTimeDatabaseService {

  constructor(
    private afDb: AngularFireDatabase
  ) {
    console.log("serviço criado");
    
   }

  getList( listPath ) {
    //retorna os valores de uma lista
    return this.afDb.list( listPath ).valueChanges();
  }

  update( list, key, data ) {
    const itemsRef = this.afDb.list(list);
    // to get a key, check the Example app below
    return itemsRef.update(key, data);
  }
   
  deleteItem(reference, key: string) {
    reference.remove(key);
  }
  deleteEverything(path: string) {
    const itemsRef = this.afDb.list(path);
    itemsRef.remove();
  }

  getListRef( path: string ): AngularFireList<any>  {
    return this.afDb.list(path);
  }

}