import { Component, h } from '@stencil/core';

@Component({
  tag: 'ez-input',
  styleUrl: 'ez-input.css',
  shadow: true,
})
export class EzInput {

  render() {
    return (
          <h1>This is the way! ⚔️</h1>
    );
/*    return (
      <Host>
        <slot>
          <h1>This is the way! ⚔️</h1>
        </slot>
      </Host>
    );*/
  }

}
