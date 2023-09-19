import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {


  checkoutForm = this.formBuilder.group({
    pessoa: this.formBuilder.group({
      id: Number
    }),
    // idPessoa: Number,
    email: "",
    papeis: Array<number>
  });

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder) {

  }

  onSubmit(): void {
    console.log("idPessoa is: ", this.checkoutForm.value.pessoa?.id);
    console.log("value is: ", this.checkoutForm.value);
    this.usuarioService.cadastrarUsuario(this.checkoutForm.value)
    this.checkoutForm.reset();
  }


}
