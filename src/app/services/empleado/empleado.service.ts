import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from 'src/app/models/Empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  apiUrl = 'https://localhost:5001/api/Empleado';

  constructor(private http: HttpClient) { }

  getEmpleado() {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  getEmpleadoById(id: number) {
    return this.http.get<Empleado>(this.apiUrl + '/' + id);
  }

  deleteEmpleado(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createEmpleado(empleado: Empleado) {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  editEmpleado(empleado: Empleado) {
    return this.http.put<Empleado>(this.apiUrl + '/' + empleado.empleadoId, empleado);
  }
}
