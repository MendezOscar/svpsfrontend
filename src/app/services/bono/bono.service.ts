import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bono } from 'src/app/models/Bono';

@Injectable({
  providedIn: 'root'
})
export class BonoService {
  apiUrl = 'https://localhost:5001/api/Bono';

  constructor(private http: HttpClient) { }

  getBonos() {
    return this.http.get<Bono[]>(this.apiUrl);
  }

  getBonoById(id: number ) {
    return this.http.get<Bono>(this.apiUrl + '/' + id);
  }

  deleteBono(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createBono(bono: Bono) {
    return this.http.post<Bono>(this.apiUrl, bono);
  }

  editBono(bono: Bono) {
    return this.http.put<Bono>(this.apiUrl + '/' + bono.bonoId, bono);
  }
}
