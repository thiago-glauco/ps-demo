import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable()
export class StorageService {

  //storageRef: AngularFireStorageReference;
  constructor(
    private storage: AngularFireStorage
  ) {
      //this.storageRef = this.storage.ref('usuarios');
      //console.dir(this.storageRef);
   }

  createRef( path ): AngularFireStorageReference {
    return this.storage.ref( path );
  }

  uploadFile( file, remotFolder): AngularFireUploadTask {
    //cria uma referência para uma pasta remota
    let folderRef: AngularFireStorageReference = this.storage.ref(remotFolder);
    //retorna um storage task
    return folderRef.put(file);
  }

  uploadImg( file, remotFolder): AngularFireUploadTask {
    let fileRef: AngularFireStorageReference = this.storage.ref(remotFolder);
    console.log("referência criada");
    return fileRef.putString(file, 'base64', {contentType:'image/png'} );
  }

  downloadUrl( fullPath ): Promise<any> {
    let fileRef: AngularFireStorageReference = this.storage.ref( fullPath );
    return fileRef.getDownloadURL( ).toPromise();
  }

}