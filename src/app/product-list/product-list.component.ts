import { Component } from '@angular/core';

import { IUsuario } from '../../Interfaces/IUsuario';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.obterTodasPessoas();
  }

  obterTodasPessoas() {
    this.usuarioService.obterTodos()
      .then(usuarios => this.products = usuarios != undefined ? usuarios : [])
      .catch(error => console.error('erro'));
  }

  share() {
    window.alert('The product has been shared!');
  }


}