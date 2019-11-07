import { Component, OnInit } from '@angular/core';
import { Deduccion } from 'src/app/models/Deduccion';
import { DeduccionService } from 'src/app/services/deduccion/deduccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creardeduccion',
  templateUrl: './creardeduccion.component.html',
  styleUrls: ['./creardeduccion.component.css']
})
export class CreardeduccionComponent implements OnInit {
  deduccion: Deduccion;
  nombre: string;
  monto: string;

  constructor(private router: Router, private deduccionService: DeduccionService) { }

  ngOnInit() {
  }

  crearDeduccion() {
    this.deduccion = new Deduccion();
    this.deduccion.nombre = this.nombre;
    this.deduccion.monto = parseFloat(this.monto);
    if (this.deduccion) {
      this.deduccionService.createDeduccion(this.deduccion).subscribe(() => {
        this.router.navigate(['/deducciones']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/deducciones']);
  }

}
