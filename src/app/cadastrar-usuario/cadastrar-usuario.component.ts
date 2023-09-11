import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  checkoutForm = this.formBuilder.group({
    name: String,
    email: String
  });

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit(): void {
    // this.checkoutForm.value.id?
    this.checkoutForm.reset();
  }


}
