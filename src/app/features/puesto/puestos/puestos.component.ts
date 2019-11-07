import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto/puesto.service';
import { Puesto } from 'src/app/models/Puesto';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {
  puestos: Puesto[];

  constructor(private router: Router, private puestoService: PuestoService) { }

  ngOnInit() {
    this.getPuesto();
  }

  getPuesto() {
    this.puestoService.getPuesto().subscribe(data => {
      this.puestos = data;
    });
  }

  deletePuesto(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.puestoService.deletePuesto(id).subscribe(() => {
        this.getPuesto();
      });
    }
  }

  crear() {
    this.router.navigate(['/crearpuesto']);
  }

  editar(id: number) {
    this.router.navigate(['/editarpuesto', id]);
  }

}
