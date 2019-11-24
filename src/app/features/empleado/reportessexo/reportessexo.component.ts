import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-reportessexo',
  templateUrl: './reportessexo.component.html',
  styleUrls: ['./reportessexo.component.css']
})
export class ReportessexoComponent implements OnInit {

  empleados: Empleado[];
  sexo: string;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  getEmpleados() {
    // tslint:disable-next-line: radix
    this.empleadoService.getEmpleadoBySexo(this.sexo).subscribe( data => {
      this.empleados = data;
    });
  }

}
