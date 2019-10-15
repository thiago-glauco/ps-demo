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

  constructor() { }

}