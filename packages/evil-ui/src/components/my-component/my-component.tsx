import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @State() phoneNumber: string;

  phoneNumberChanged(e: any) {
    console.debug('my-component phoneNumberChanged', e.detail);
    this.phoneNumber = e.detail;
  }

  render() {
    return (
      <Host class="outer">
        <div class="inner">
          <h1>my-component kutyamokus</h1>
        </div>
      </Host>
    );
  }
}
