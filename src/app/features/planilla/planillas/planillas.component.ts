import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanillaService } from 'src/app/services/planilla/planilla.service';
import { Planilla } from 'src/app/models/Planilla';

@Component({
  selector: 'app-planillas',
  templateUrl: './planillas.component.html',
  styleUrls: ['./planillas.component.css']
})
export class PlanillasComponent implements OnInit {
  planillas: Planilla[];

  constructor(private router: Router, private planillaService: PlanillaService) { }

  ngOnInit() {
    this.getPlanillas();
  }

  getPlanillas() {
    this.planillaService.getPlanilla().subscribe(data => {
      this.planillas = data;
      console.log(this.planillas);
    });
  }

  deleteEmpleado(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.planillaService.deletePlanilla(id).subscribe(() => {
        this.getPlanillas();
      });
    }
  }

  crear() {
    this.router.navigate(['/crearplanilla']);
  }

  editar(id: number) {
    this.router.navigate(['/editarplanilla', id]);
  }

  verplanilla(id: number) {
    this.router.navigate(['/verplanilla', id]);
  }

}
