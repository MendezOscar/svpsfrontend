import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.userService.deleteUser(id).subscribe(() => {
        this.getUsers();
      });
    }
  }

  crear() {
    this.router.navigate(['/crearusuario']);
  }

  editar(id: number) {
    this.router.navigate(['/editarusuario', id]);
  }

}
