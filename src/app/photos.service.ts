import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface UnsplashResponseInterface {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponseInterface>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID g5RZTOvOsCkPvpMVZi9_yRaLpJyD2fXWMXXHN3EW3Ng'
      }
    })
  }
}
