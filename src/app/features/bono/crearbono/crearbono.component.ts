import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonoService } from 'src/app/services/bono/bono.service';
import { Bono } from 'src/app/models/Bono';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-crearbono',
  templateUrl: './crearbono.component.html',
  styleUrls: ['./crearbono.component.css']
})
export class CrearbonoComponent implements OnInit {
  bono: Bono;
  nombre: string;
  monto: string;
  planilla: string;
  empleado: string;

  constructor(private router: Router, private bonoService: BonoService) { }

  ngOnInit() {
  }

  crearBono() {
    this.bono = new Bono();
    this.bono.nombre = this.nombre;
    this.bono.empleadoId = parseInt(this.empleado);
    this.bono.planillaId = parseInt(this.planilla);
    this.bono.monto = parseFloat(this.monto);
    if (this.bono) {
      this.bonoService.createBono(this.bono).subscribe(() => {
        this.router.navigate(['/bono']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/bono']);
  }

}
