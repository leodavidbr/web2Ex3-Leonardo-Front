import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/service/usuario.service';
import { IUsuario } from '../../Interfaces/IUsuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  usuario: IUsuario | undefined;

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const usuarioIdFromRoute = Number(routeParams.get('usuarioId'));

    this.obterPessoaPorId(usuarioIdFromRoute);
  }

  obterPessoaPorId(id: Number) {
    this.usuarioService.obterPorId(id)
      .then(usuario => this.usuario = usuario)
      .catch(error => console.error('erro'));
  }


}
