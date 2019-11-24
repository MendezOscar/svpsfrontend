import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-reportescargos',
  templateUrl: './reportescargos.component.html',
  styleUrls: ['./reportescargos.component.css']
})
export class ReportescargosComponent implements OnInit {
  empleados: Empleado[];
  cargo: string;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  getEmpleados() {
    // tslint:disable-next-line: radix
    this.empleadoService.getEmpleadoByPuesto(parseInt(this.cargo)).subscribe( data => {
      this.empleados = data;
    });
  }
}
