import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
import { Router, ActivatedRoute } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto/puesto.service';

@Component({
  selector: 'app-editarpuesto',
  templateUrl: './editarpuesto.component.html',
  styleUrls: ['./editarpuesto.component.css']
})
export class EditarpuestoComponent implements OnInit {
  puesto: Puesto;
  nombre: string;

  constructor(private router: Router, private route: ActivatedRoute, private puestoService: PuestoService) { }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.getPuesto(id);
  }

  getPuesto(id: number) {
    this.puestoService.getPuestoById(id).subscribe(res => {
      this.puesto = res;
    });
  }

  editarPuesto() {
    this.puesto.nombre = this.nombre;
    this.puestoService.editPuesto(this.puesto).subscribe(() => {
      this.router.navigate(['/puestos']);
    });
  }

  cancel() {
    this.router.navigate(['/puestos']);
  }
}
