import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    this.http.get('https://api.unsplash.com/search/photos?query=developers', {
      headers: {
        Authorization: 'Client-ID g5RZTOvOsCkPvpMVZi9_yRaLpJyD2fXWMXXHN3EW3Ng'
      }
    })
  }
}
