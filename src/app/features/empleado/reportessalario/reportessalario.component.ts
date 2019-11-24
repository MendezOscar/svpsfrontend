import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-reportessalario',
  templateUrl: './reportessalario.component.html',
  styleUrls: ['./reportessalario.component.css']
})
export class ReportessalarioComponent implements OnInit {
  empleados: Empleado[];
  salario: string;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  getEmpleados() {
    // tslint:disable-next-line: radix
    this.empleadoService.getEmpleadoBySalario(parseFloat(this.salario)).subscribe( data => {
      this.empleados = data;
    });
  }
}
