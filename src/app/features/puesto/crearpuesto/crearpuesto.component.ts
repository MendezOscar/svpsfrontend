import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
import { Router } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto/puesto.service';

@Component({
  selector: 'app-crearpuesto',
  templateUrl: './crearpuesto.component.html',
  styleUrls: ['./crearpuesto.component.css']
})
export class CrearpuestoComponent implements OnInit {
  puesto: Puesto;
  nombre: string;

  constructor(private router: Router, private puestoService: PuestoService) { }

  ngOnInit() {
  }

  crearPuesto() {
    this.puesto = new Puesto();
    this.puesto.nombre = this.nombre;
    if (this.puesto) {
      this.puestoService.createPuesto(this.puesto).subscribe(() => {
        this.router.navigate(['/puestos']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/puestos']);
  }

}
