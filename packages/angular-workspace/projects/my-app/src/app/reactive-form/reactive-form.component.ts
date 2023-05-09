import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  onSubmit(ev: any) {
    ev.preventDefault();
    console.log('I did something. 🐁');
  }
}
