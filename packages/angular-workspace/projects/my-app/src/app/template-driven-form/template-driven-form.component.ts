import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  public phoneNumber: string = '🐁';
  onSubmit(ev: any) {
    ev.preventDefault();
    const response = `I did something. ${this.phoneNumber}`;
    console.log(response);
    alert(response);
  }
}
