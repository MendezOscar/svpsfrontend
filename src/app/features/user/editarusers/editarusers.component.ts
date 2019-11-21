import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-editarusers',
  templateUrl: './editarusers.component.html',
  styleUrls: ['./editarusers.component.css']
})
export class EditarusersComponent implements OnInit {
  username: string;
  password: string;
  tipo: string;
  usuario: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(res => {
      this.usuario = res;
    });
  }

  editarUser() {
    this.usuario.username = this.username;
    this.usuario.clave = this.password;
    this.usuario.tipo = this.tipo;
    this.userService.editUser(this.usuario).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }

}
