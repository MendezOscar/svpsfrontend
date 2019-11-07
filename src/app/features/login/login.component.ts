import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  username: string;
  clave: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  getUserByLogin() {
    this.userService.getUserById(this.username, this.clave).subscribe(data => {
      this.user = data;
      console.log();
      this.router.navigate(['/home']);
    });
  }

}
