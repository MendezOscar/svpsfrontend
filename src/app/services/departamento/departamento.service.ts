import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from 'src/app/models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  apiUrl = 'https://localhost:5001/api/Departamento';

  constructor(private http: HttpClient) { }

  getDepartamento() {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  getDepartamentoById(id: number ) {
    return this.http.get<Departamento>(this.apiUrl + '/' + id);
  }

  deleteDepartamento(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createDepartamento(obj: Departamento) {
    return this.http.post<Departamento>(this.apiUrl, obj);
  }

  editDepartamento(obj: Departamento) {
    return this.http.put<Departamento>(this.apiUrl + '/' + obj.departamentoId, obj);
  }
}
