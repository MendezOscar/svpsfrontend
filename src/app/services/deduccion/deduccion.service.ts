import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deduccion } from 'src/app/models/Deduccion';

@Injectable({
  providedIn: 'root'
})
export class DeduccionService {

  apiUrl = 'https://localhost:5001/api/Deduccion';

  constructor(private http: HttpClient) { }

  getDeduccion() {
    return this.http.get<Deduccion[]>(this.apiUrl);
  }

  getDeduccionyId(id: number ) {
    return this.http.get<Deduccion>(this.apiUrl + '/' + id);
  }

  getDeduccionByPlanilla(idplanilla: number, idempleado: number) {
    return this.http.get<Deduccion[]>(this.apiUrl + '/' + idplanilla + '/' + idempleado);
  }

  deleteDeduccion(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createDeduccion(obj: Deduccion) {
    return this.http.post<Deduccion>(this.apiUrl, obj);
  }

  editDeduccion(obj: Deduccion) {
    return this.http.put<Deduccion>(this.apiUrl + '/' + obj.deduccionId, obj);
  }
}
