import { Component, OnInit } from '@angular/core';
import { DeduccionService } from 'src/app/services/deduccion/deduccion.service';
import { Router } from '@angular/router';
import { Deduccion } from 'src/app/models/Deduccion';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.css']
})
export class DeduccionesComponent implements OnInit {
  deducciones: Deduccion[];

  constructor( private router: Router, private deduccionService: DeduccionService) { }

  ngOnInit() {
    this.getDeducciones();
  }

  getDeducciones() {
    this.deduccionService.getDeduccion().subscribe(data => {
      this.deducciones = data;
    });
  }

  deleteDeduccion(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.deduccionService.deleteDeduccion(id).subscribe(() => {
        this.getDeducciones();
      });
    }
  }

  crear() {
    this.router.navigate(['/creardeduccion']);
  }

  editar(id: number) {
    this.router.navigate(['/editardeduccion', id]);
  }

}
