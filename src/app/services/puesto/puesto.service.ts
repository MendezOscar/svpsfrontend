import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Puesto } from 'src/app/models/Puesto';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  apiUrl = 'https://localhost:5001/api/Puesto';

  constructor(private http: HttpClient) { }

  getPuesto() {
    return this.http.get<Puesto[]>(this.apiUrl);
  }

  getPuestoById(id: number ) {
    return this.http.get<Puesto>(this.apiUrl + '/' + id);
  }

  deletePuesto(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createPuesto(obj: Puesto) {
    return this.http.post<Puesto>(this.apiUrl, obj);
  }

  editPuesto(obj: Puesto) {
    return this.http.put<Puesto>(this.apiUrl + '/' + obj.puestoId, obj);
  }
}
