import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleado().subscribe(data => {
      this.empleados = data;
    });
  }

  deleteEmpleado(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.getEmpleados();
      });
    }
  }

  crear() {
    this.router.navigate(['/crearempleado']);
  }

  editar(id: number) {
    this.router.navigate(['/editarempleado', id]);
  }

}
