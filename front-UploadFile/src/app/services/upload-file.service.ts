import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseUrl="http://localhost:8080/files"
  constructor(private http: HttpClient) { }
  add(files:File[]){
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
      console.log("files",files);
    }
    return this.http.post<any>(`${this.baseUrl}`,formData);
  }
}
