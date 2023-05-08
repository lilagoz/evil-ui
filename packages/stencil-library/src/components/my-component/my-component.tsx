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
          <slot name={'header'} />
          <slot />
          <evil-phonenumber-input onChange={e => this.phoneNumberChanged(e)}>Phone number</evil-phonenumber-input>
          <pre style={{ color: '#f88' }}>my-component phone number: {this.phoneNumber}</pre>
          <slot name={'footer'} />
        </div>
      </Host>
    );
  }
}
