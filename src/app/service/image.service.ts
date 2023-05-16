import { Injectable } from '@angular/core';
// import { Storage, ref } from '@angular/fire/storage'; 

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
  //   const file = $event.target.files[0]
  // const imgRef = ref(this.storage, 'imagen/'+ name)
  // upLoadBytes(imgRef, file)
  // .then(response => {this.getImages()})
  // .catch(error => console.log(error))
 }

  getImages(){
  //   constante imagesRef = ref(this.storage, 'imagen')
  //   list(imagesRef)
  //   .then(async response => {
  //   for(let item for respinse.items) {
  //     this.url = await getDowloadURL(item);
  //     console.log("La URL es: " + this.url);
  //     }
  //  })
  //  .catch(error => console.log(error))
 }
}


