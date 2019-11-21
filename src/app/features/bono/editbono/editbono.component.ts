import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BonoService } from 'src/app/services/bono/bono.service';
import { Bono } from 'src/app/models/Bono';

@Component({
  selector: 'app-editbono',
  templateUrl: './editbono.component.html',
  styleUrls: ['./editbono.component.css']
})
export class EditbonoComponent implements OnInit {
  bono: Bono;
  nombre: string;
  monto: string;
  empleado: string;
  planilla: string;

  constructor(private router: Router, private bonoService: BonoService, private route: ActivatedRoute) {
    this.bono = new Bono();
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getBono(id);
  }

  getBono(id: number) {
    this.bonoService.getBonoById(id).subscribe(res => {
      this.bono = res;
    });
  }

  editarBono() {
    this.bono.nombre = this.nombre;
    this.bono.monto = parseFloat(this.monto);
    this.bono.empleadoId = parseInt(this.empleado);
    this.bono.planillaId = parseInt(this.planilla);
    this.bonoService.editBono(this.bono).subscribe(() => {
      this.router.navigate(['/bono']);
    });
  }

  cancel() {
    this.router.navigate(['/bono']);
  }

}
