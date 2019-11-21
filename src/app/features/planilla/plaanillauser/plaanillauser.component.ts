import { Component, OnInit } from '@angular/core';
import { Planilla } from 'src/app/models/Planilla';
import { Router } from '@angular/router';
import { PlanillaService } from 'src/app/services/planilla/planilla.service';

@Component({
  selector: 'app-plaanillauser',
  templateUrl: './plaanillauser.component.html',
  styleUrls: ['./plaanillauser.component.css']
})
export class PlaanillauserComponent implements OnInit {

  planillas: Planilla[];
  empleadoId: string;

  constructor(private router: Router, private planillaService: PlanillaService) { }

  ngOnInit() {
  }

  getPlanilla() {
    this.planillaService.getPlanillaByEmpleado(parseInt(this.empleadoId)).subscribe(data => {
      this.planillas = data;
    });
  }

  verplanilla(id: number) {
    this.router.navigate(['/verplanilla', id]);
  }
}
