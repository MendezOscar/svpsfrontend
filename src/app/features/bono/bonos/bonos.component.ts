import { Component, OnInit } from '@angular/core';
import { Bono } from 'src/app/models/Bono';
import { BonoService } from 'src/app/services/bono/bono.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bonos.component.css']
})
export class BonosComponent implements OnInit {
  bonos: Bono[];

  constructor(private bonoService: BonoService, private router: Router) { }

  ngOnInit() {
    this.getBonos();
  }

  getBonos() {
    this.bonoService.getBonos().subscribe(data => {
      this.bonos = data;
        });
  }

  deleteCategory(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.bonoService.deleteBono(id).subscribe(() => {
        this.getBonos();
      });
    }
  }

  crear() {
    this.router.navigate(['/crearbono']);
  }

  editar(id: number) {
    this.router.navigate(['/editarbono', id]);
  }


}
