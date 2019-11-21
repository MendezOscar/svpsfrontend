import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-crearusers',
  templateUrl: './crearusers.component.html',
  styleUrls: ['./crearusers.component.css']
})
export class CrearusersComponent implements OnInit {
  username: string;
  password: string;
  tipo: string;
  usuario: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  crearUser() {
    this.usuario = new User();
    this.usuario.username = this.username;
    this.usuario.clave = this.password;
    this.usuario.tipo = this.tipo;
    if (this.usuario) {
      this.userService.createUser(this.usuario).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/users']);
  }

}
