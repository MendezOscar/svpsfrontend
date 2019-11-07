import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { Departamento } from 'src/app/models/Departamento';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  departamento: Departamento;
  nombre: string;

  constructor(private router: Router, private departamentoService: DepartamentoService, private route: ActivatedRoute) { }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.getDepartamento(id);
  }

  getDepartamento(id: number) {
    this.departamentoService.getDepartamentoById(id).subscribe(res => {
      this.departamento = res;
    });
  }

  editarDepartamento() {
    this.departamento.nombre = this.nombre;
    this.departamentoService.editDepartamento(this.departamento).subscribe(() => {
      this.router.navigate(['/departamentos']);
    });
  }

  cancel() {
    this.router.navigate(['/departamentos']);
  }

}
