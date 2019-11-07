import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeduccionService } from 'src/app/services/deduccion/deduccion.service';
import { Deduccion } from 'src/app/models/Deduccion';

@Component({
  selector: 'app-editardeduccion',
  templateUrl: './editardeduccion.component.html',
  styleUrls: ['./editardeduccion.component.css']
})
export class EditardeduccionComponent implements OnInit {
  deduccion: Deduccion;
  nombre: string;
  monto: string;

  constructor(private router: Router, private deduccionService: DeduccionService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDeduccion(id);
  }

  getDeduccion(id: number) {
    this.deduccionService.getDeduccionyId(id).subscribe(res => {
      this.deduccion = res;
    });
  }

  editarDeduccion() {
    this.deduccion.nombre = this.nombre;
    this.deduccion.monto = parseFloat(this.monto);
    this.deduccionService.editDeduccion(this.deduccion).subscribe(() => {
      this.router.navigate(['/deducciones']);
    });
  }

  cancel() {
    this.router.navigate(['/deducciones']);
  }

}
