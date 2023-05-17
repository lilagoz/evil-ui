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
          <label>This is the way! ⚔️ 🛡️</label>
          <input type={"text"} class={"input"} />
        </slot>
      </Host>
    );
  }
}
