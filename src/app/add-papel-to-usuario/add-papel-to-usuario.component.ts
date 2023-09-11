import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-papel-to-usuario',
  templateUrl: './add-papel-to-usuario.component.html',
  styleUrls: ['./add-papel-to-usuario.component.css']
})
export class AddPapelToUsuarioComponent {
  checkoutForm = this.formBuilder.group({
    id: Number
  });

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit(): void {
    // this.checkoutForm.value.id?
    this.checkoutForm.reset();
  }
}
