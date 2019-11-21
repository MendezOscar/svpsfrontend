import { Component, OnInit } from '@angular/core';
import { Planilla } from 'src/app/models/Planilla';
import { PlanillaService } from 'src/app/services/planilla/planilla.service';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado';
import { DeduccionService } from 'src/app/services/deduccion/deduccion.service';
import { BonoService } from 'src/app/services/bono/bono.service';
import { Bono } from 'src/app/models/Bono';
import { Deduccion } from 'src/app/models/Deduccion';

@Component({
  selector: 'app-crearplanilla',
  templateUrl: './crearplanilla.component.html',
  styleUrls: ['./crearplanilla.component.css']
})
export class CrearplanillaComponent implements OnInit {
  planilla: Planilla;
  bono: Bono;
  deduccion: Deduccion;
  empleado: Empleado;

  bonos: Bono[];
  deducciones: Deduccion[];
  planillas: Planilla[];
  empleados: Empleado[];

  empleadoId: string;
  fecha: string;
  salario: string;

  nombreBono: string;
  montoBono: string;
  planillaidBono: string;

  nombreDeducicon: string;
  montoDeduccion: string;
  planillaidDeduccion: string;

  totalBono: number;
  totalDeduccion: number;
  salariototal: string;

  constructor(private planillaService: PlanillaService, private router: Router,
              private empleadoService: EmpleadoService, private deduccionService: DeduccionService,
              private bonoService: BonoService) { }

  ngOnInit() {
    this.getempleados();
    this.getPlanillas();
  }

  sumarBonos(bonos: Bono[]) {
    let total = 0;
    // tslint:disable-next-line: only-arrow-functions
    bonos.forEach (function(monto) {
      total += monto.monto ;
    });
    this.totalBono = total;
    console.log(total);
  }

  sumarDeducciones(deducciones: Deduccion[]) {
    let total = 0;
    // tslint:disable-next-line: only-arrow-functions
    deducciones.forEach(function(monto) {
      total += monto.monto;
    });
    console.log(total);
    this.totalDeduccion = total;
    console.log(this.totalDeduccion);
  }

  getBonos() {
    // tslint:disable-next-line: radix
    this.bonoService.getBonoByPlanilla(parseInt(this.planillaidBono), parseInt(this.empleadoId))
    .subscribe(data => {
      this.bonos = data;
      this.sumarBonos(data);
      this.salariototal = ((parseFloat(this.salario) + this.totalBono) - this.totalDeduccion).toString();
    });
  }

  getDeducciones() {
    // tslint:disable-next-line: radix
    this.deduccionService.getDeduccionByPlanilla(parseInt(this.planillaidDeduccion), parseInt(this.empleadoId)).
    subscribe(data => {
      this.deducciones = data;
      this.sumarDeducciones(data);
      this.salariototal = ((parseFloat(this.salario) + this.totalBono) - this.totalDeduccion).toString();
    });
  }

  addBono() {
    this.bono = new Bono();
    // tslint:disable-next-line: radix
    this.bono.empleadoId = parseInt(this.empleadoId);
    this.bono.nombre = this.nombreBono;
    // tslint:disable-next-line: radix
    this.bono.planillaId = parseInt(this.planillaidBono);
    this.bono.monto = parseFloat(this.montoBono);

    this.bonoService.createBono(this.bono).subscribe(() => {
      this.getBonos();
    });
  }

  addDeduccion() {
    this.deduccion = new Deduccion();
    // tslint:disable-next-line: radix
    this.deduccion.empleadoId = parseInt(this.empleadoId);
    this.deduccion.nombre = this.nombreDeducicon;
    // tslint:disable-next-line: radix
    this.deduccion.planillaId = parseInt(this.planillaidDeduccion);
    this.deduccion.monto = parseFloat(this.montoDeduccion);

    this.deduccionService.createDeduccion(this.deduccion).subscribe(() => {
      this.getDeducciones();
    });
  }

  getempleados() {
    this.empleadoService.getEmpleado().subscribe(data => {
      this.empleados = data;
    });
  }

  getPlanillas() {
    this.planillaService.getPlanilla().subscribe(data => {
      this.planillas = data;
    });
  }

  getEmpleadoById() {
    // tslint:disable-next-line: radix
    this.empleadoService.getEmpleadoById(parseInt(this.empleadoId)).subscribe(data => {
      this.empleado = data;
      this.salario = this.empleado.salario.toString();
      this.salariototal = this.salario;
    });
  }

  crearPlanilla() {
    this.planilla = new Planilla();
    this.planilla.fecha = this.fecha;
    // tslint:disable-next-line: radix
    this.planilla.empleadoid = parseInt(this.empleadoId);
    this.planilla.salario = parseFloat(this.salario);

    this.planillaService.createPlanilla(this.planilla).subscribe (() => {

    });

  }

  editar(id: number) {
    this.router.navigate(['/editarbono', id]);
  }

  editarDeduccion(id: number) {
    this.router.navigate(['/editardeduccion', id]);
  }

  deleteCategory(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.bonoService.deleteBono(id).subscribe(() => {
        this.getBonos();
      });
    }
  }

  deleteDeduccion(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.deduccionService.deleteDeduccion(id).subscribe(() => {
        this.getDeducciones();
      });
    }
  }

  cancel() {
    this.router.navigate(['planillas']);
  }

}
