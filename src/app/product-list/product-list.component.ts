import { Component } from '@angular/core';

import { IUsuario } from '../../Interfaces/IUsuario';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  usuarios: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.obterTodasPessoas();
  }

  obterTodasPessoas() {
    this.usuarioService.obterTodos()
      .then(usuarios => this.usuarios = usuarios ?? [])
      .catch(error => console.error('erro'));
  }
}