import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireObject, PathReference, AngularFireList } from '@angular/fire/database';
import {Slider} from "../shared/slider";
import { RealTimeDatabaseService } from './real-time-database.service';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable()
export class CarouselHomeService {

  path: string = "sliderhome";
  dbRootPath: string = "sliderHome";
  baseRef: AngularFireStorageReference;
  slidesList: Slider[];

  constructor(
    private storageService: StorageService,
    private db: RealTimeDatabaseService
  ) {

   }

  getAll( ) {
    //this.baseRef = this.storageService.createRef( this.path );
    return this.db.getList( this.dbRootPath )
  }

  getActiveSlides( ) {
    return this.db.getList<Slider>( this.dbRootPath ).pipe(
      map( (slides: Slider) => slides.filter(slide=> slide.enabled === true) )
    )
  }

}