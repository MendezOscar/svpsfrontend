import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado';
import { User } from 'src/app/models/User';
import { Departamento } from 'src/app/models/Departamento';
import { Puesto } from 'src/app/models/Puesto';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { PuestoService } from 'src/app/services/puesto/puesto.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-editarempleado',
  templateUrl: './editarempleado.component.html',
  styleUrls: ['./editarempleado.component.css']
})

export class EditarempleadoComponent implements OnInit {
  empleado: Empleado;
  users: User[];
  departamentos: Departamento[];
  puestos: Puesto[];
  nombre: string;
  telefono: string;
  sexo: string;
  direccion: string;
  departamentoId: string;
  cargoId: string;
  userId: string;
  salario: string;

  constructor(private router: Router, private empleadoService: EmpleadoService,
              private route: ActivatedRoute,
              private departamentoService: DepartamentoService,
              private puestoService: PuestoService,
              private userService: UserService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getEmpleado(id);
    this.getDepa();
    this.getPuestos();
    this.getUser();
  }

  getDepa() {
    this.departamentoService.getDepartamento().subscribe(data => {
      this.departamentos = data;
    });
  }

  getPuestos() {
    this.puestoService.getPuesto().subscribe(data => {
      this.puestos = data;
    });
  }

  getUser() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getEmpleado(id: number) {
    this.empleadoService.getEmpleadoById(id).subscribe(res => {
      this.empleado = res;
    });
  }

  editarEmpleado() {
    this.empleado.nombre = this.nombre;
    this.empleado.telefono = this.telefono;
    this.empleado.sexo = this.sexo;
    this.empleado.direccion = this.direccion;
    // tslint:disable-next-line: radix
    this.empleado.departamentoId = parseInt(this.departamentoId);
    // tslint:disable-next-line: radix
    this.empleado.cargoId = parseInt(this.cargoId);
    // tslint:disable-next-line: radix
    this.empleado.userId = parseInt(this.cargoId);
    // tslint:disable-next-line: radix
    this.empleado.salario = parseInt(this.salario);
    this.empleadoService.editEmpleado(this.empleado).subscribe(() => {
      this.router.navigate(['/empleados']);
    });
  }

  cancel() {
    this.router.navigate(['/empleados']);
  }

}
