import { Component, OnInit } from '@angular/core';
import { PlanillaService } from 'src/app/services/planilla/planilla.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BonoService } from 'src/app/services/bono/bono.service';
import { DeduccionService } from 'src/app/services/deduccion/deduccion.service';
import { Planilla } from 'src/app/models/Planilla';
import { Deduccion } from 'src/app/models/Deduccion';
import { Bono } from 'src/app/models/Bono';

@Component({
  selector: 'app-verplanilla',
  templateUrl: './verplanilla.component.html',
  styleUrls: ['./verplanilla.component.css']
})
export class VerplanillaComponent implements OnInit {
  planilla: Planilla;
  bonos: Bono[];
  deducciones: Deduccion[];

  salariototal: string;
  salario: number;
  totalBono: number;
  totalDeduccion: number;

  constructor(private planillaService: PlanillaService, private router: Router,
              private bonoService: BonoService, private deduccionService: DeduccionService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getPlanilla(id);
  }

  getPlanilla(id: number) {
    this.planillaService.getPlanillaById(id).subscribe(data => {
      this.planilla = data;
      this.salario = this.planilla.salario;
      this.getBonos(this.planilla.panillaId, this.planilla.empleadoid);
      this.getDeducciones(this.planilla.panillaId, this.planilla.empleadoid);
    });
  }

  getBonos(idplanilla: number, idemplado: number) {
    this.bonoService.getBonoByPlanilla(idplanilla, idemplado).subscribe(data => {
      this.bonos = data;
      this.sumarBonos(data);
    });
  }

  getDeducciones(idplanilla: number, idemplado: number) {
    this.deduccionService.getDeduccionByPlanilla(idplanilla, idemplado).subscribe(data => {
      this.deducciones = data;
      this.sumarDeducciones(data);
      this.salariototal = ((this.salario + this.totalBono) - this.totalDeduccion).toString();
    });
  }

  sumarBonos(bonos: Bono[]) {
    let total = 0;
    // tslint:disable-next-line: only-arrow-functions
    bonos.forEach (function(monto) {
      total += monto.monto ;
    });
    this.totalBono = total;
    console.log(this.totalDeduccion);
  }

  sumarDeducciones(deducciones: Deduccion[]) {
    let total = 0;
    // tslint:disable-next-line: only-arrow-functions
    deducciones.forEach(function(monto) {
      total += monto.monto;
    });
    this.totalDeduccion = total;
  }

  cancel() {
    this.router.navigate(['planillas']);
  }

}
