import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from 'src/Interfaces/IUsuario';
import { IUsuarioCadastro } from 'src/Interfaces/iusuario-cadastro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return this.httpClient.get<IUsuario[]>('http://localhost:8080/usuario').toPromise();
  }

  obterPorId(id: Number) {
    return this.httpClient.get<IUsuario>('http://localhost:8080/usuario/' + id).toPromise();
  }

  cadastrarUsuario(usuarioCadastrar: any) {
    return this.httpClient.post<IUsuario>('http://localhost:8080/usuario', usuarioCadastrar).toPromise();
  }
}
