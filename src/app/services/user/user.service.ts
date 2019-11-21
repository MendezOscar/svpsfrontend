import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:5001/api/Usuario';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number) {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  getUserById(username: string, clave: string ) {
    return this.http.get<User>(this.apiUrl + '/' + username + '/' + clave);
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  editUser(user: User) {
    return this.http.put<User>(this.apiUrl + '/' + user.usuarioId, user);
  }
}
