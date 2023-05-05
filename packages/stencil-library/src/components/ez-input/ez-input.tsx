import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'ez-input',
  styleUrl: 'ez-input.scss',
  shadow: true,
})
export class EzInput {

  render() {
    return (
      <Host>
        <slot>
          <h1>This is the way! ⚔️ 🛡️</h1>
        </slot>
      </Host>
    );
  }

}
