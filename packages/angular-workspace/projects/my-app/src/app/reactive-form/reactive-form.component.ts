import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  constructor(private bobTheBuilder: FormBuilder) {}
  form = this.bobTheBuilder.group({
    phoneNumber: ['', Validators.required],
  });

  public onSubmit(ev: any) {
    // ev.preventDefault();
    if (this.form.valid) {
      const response = `I did something. ${this.form.value.phoneNumber}`;
      console.log(response);
      alert(response);
    } else {
      console.error('This form is invalid 😿');
    }
  }
}
