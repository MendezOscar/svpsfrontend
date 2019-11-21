import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planilla } from 'src/app/models/Planilla';

@Injectable({
  providedIn: 'root'
})
export class PlanillaService {

  apiUrl = 'https://localhost:5001/api/Planilla';

  constructor(private http: HttpClient) { }

  getPlanilla() {
    return this.http.get<Planilla[]>(this.apiUrl);
  }

  getPlanillaById(id: number) {
    return this.http.get<Planilla>(this.apiUrl + '/' + id);
  }

  getPlanillaByEmpleado(empleado: number) {
    return this.http.get<Planilla[]>(this.apiUrl + '/' + 'empleado/' + empleado);
  }

  deletePlanilla(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createPlanilla(planilla: Planilla) {
    return this.http.post<Planilla>(this.apiUrl, planilla);
  }

  editPlanilla(planilla: Planilla) {
    return this.http.put<Planilla>(this.apiUrl + '/' + planilla.panillaId, planilla);
  }
}
